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

/* ================= CERTIFICATE MODAL ================= */

function openModal(card) {
  const img = card.querySelector("img");
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("certModalImg");

  modalImg.src = img.src;
  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("certModal").classList.remove("active");
}
