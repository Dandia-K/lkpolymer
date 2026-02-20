document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const megaMenu = document.getElementById("megaMenu");
  const overlay = document.getElementById("overlay");

  if (!menuBtn || !megaMenu || !overlay) return;

  menuBtn.addEventListener("click", function() {
    megaMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", function() {
    megaMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

});
