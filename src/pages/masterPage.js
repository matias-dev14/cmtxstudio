// masterPage.js — código global (header, nav)

$w.onReady(function () {

  // ─── HEADER: Transparente no topo, escuro ao rolar ───────────
  $w('#section3').onViewportEnter(() => {
    $w('#section3').style.backgroundColor = 'rgba(0, 0, 0, 0)';
  });

  $w('#section3').onViewportLeave(() => {
    $w('#section3').style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
  });

});