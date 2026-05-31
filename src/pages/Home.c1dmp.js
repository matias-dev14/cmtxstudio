// Guia de API: https://www.wix.com/velo/reference/api-overview/introduction
import wixAnimations from 'wix-animations';

$w.onReady(function () {

  // ─── HERO: Esconde elementos para animar ─────────────────────
  $w('#text10').hide();
  $w('#text11').hide();
  $w('#btnProjeto').hide();
  $w('#button2').hide();

  // ─── HERO: Animação de entrada em sequência ──────────────────
  wixAnimations.timeline()
    .add($w('#text10'),    { duration: 700, opacity: 1, delay: 100 })
    .add($w('#text11'),    { duration: 500, opacity: 1, delay: 100 })
    .add($w('#btnProjeto'),{ duration: 400, opacity: 1, delay: 100 })
    .add($w('#button2'),   { duration: 400, opacity: 1, delay: 50  })
    .play();

  // ─── HERO: Botão "Solicitar Orçamento" → rola até section4 ──
  $w('#btnProjeto').onClick(() => {
    $w('#section4').scrollTo();
  });

  // ─── HERO: Botão "Ver Projetos" → rola até section4 ─────────
  $w('#button2').onClick(() => {
    $w('#section4').scrollTo();
  });

  // ─── SERVIÇOS: Cards somem antes de animar ───────────────────
  $w('#box1').hide();
  $w('#box2').hide();
  $w('#box3').hide();

  // ─── SERVIÇOS: Aparecem ao rolar até a seção ─────────────────
  $w('#section5').onViewportEnter(() => {
    wixAnimations.timeline()
      .add($w('#box1'), { duration: 500, opacity: 1, delay: 0   })
      .add($w('#box2'), { duration: 500, opacity: 1, delay: 150 })
      .add($w('#box3'), { duration: 500, opacity: 1, delay: 150 })
      .play();
  });

  // ─── SERVIÇOS: Hover nos cards ───────────────────────────────
  ['#box1', '#box2', '#box3'].forEach(id => {
    $w(id).onMouseIn(() => {
      $w(id).style.backgroundColor = '#1a1a2e';
    });
    $w(id).onMouseOut(() => {
      $w(id).style.backgroundColor = '#0d0d1a';
    });
  });

});