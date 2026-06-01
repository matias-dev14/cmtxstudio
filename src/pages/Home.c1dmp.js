// Guia de API: https://www.wix.com/velo/reference/api-overview/introduction
import wixAnimations from 'wix-animations';

$w.onReady(function () {

  // ─── HERO: Animação de entrada ───────────────────────────────
  $w('#text10').hide();
  $w('#text11').hide();
  $w('#btnProjeto').hide();
  $w('#button2').hide();

  wixAnimations.timeline()
    .add($w('#text10'),     { duration: 700, opacity: 1, delay: 100 })
    .add($w('#text11'),     { duration: 500, opacity: 1, delay: 100 })
    .add($w('#btnProjeto'), { duration: 400, opacity: 1, delay: 100 })
    .add($w('#button2'),    { duration: 400, opacity: 1, delay: 50  })
    .play();

  // ─── HERO: Botões rolam até contato ──────────────────────────
  $w('#btnProjeto').onClick(() => {
    $w('#contactSection').scrollTo();
  });
  $w('#button2').onClick(() => {
    $w('#contactSection').scrollTo();
  });

  // ─── SERVIÇOS: Cards aparecem ao rolar ───────────────────────
  $w('#box1').hide();
  $w('#box2').hide();
  $w('#box3').hide();

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

  // ─── SOBRE NÓS: Animação ao entrar na tela ───────────────────
  $w('#aboutTitle').hide();
  $w('#aboutText').hide();

  $w('#aboutSection').onViewportEnter(() => {
    wixAnimations.timeline()
      .add($w('#aboutTitle'), { duration: 600, opacity: 1, delay: 100 })
      .add($w('#aboutText'),  { duration: 500, opacity: 1, delay: 100 })
      .play();
  });

  // ─── CONTATO: Seção aparece ao rolar ─────────────────────────
  $w('#contactSection').onViewportEnter(() => {
    wixAnimations.timeline()
      .add($w('#contactSection'), { duration: 600, opacity: 1, delay: 100 })
      .play();
  });

});