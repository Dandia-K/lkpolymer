document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const megaMenu = document.getElementById("megaMenu");
  const overlay = document.getElementById("overlay");

  if (!menuBtn || !megaMenu || !overlay) return;

  // 햄버거 클릭
  menuBtn.addEventListener("click", function() {
    megaMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // 오버레이 클릭
  overlay.addEventListener("click", function() {
    megaMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  });

});
