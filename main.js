document.addEventListener("DOMContentLoaded", function() {

  const menuBtn = document.getElementById("menuBtn");
  const megaMenu = document.getElementById("megaMenu");
  const overlay = document.getElementById("overlay");

  if (menuBtn && megaMenu) {
    menuBtn.addEventListener("click", function() {
      megaMenu.classList.toggle("active");
      if (overlay) overlay.classList.toggle("active");
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function() {
      megaMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  }

});

document.addEventListener("DOMContentLoaded", function() {

  const mainImage = document.querySelector(".main-image img");
  const thumbnails = document.querySelectorAll(".thumb-list img");

  if (!mainImage) return;

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function() {
      mainImage.src = this.src;
    });
  });

});
