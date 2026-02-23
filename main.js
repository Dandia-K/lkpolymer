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

/* ===== 모달 배경 클릭 시 닫기 ===== */

document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("certModal");

  if (modal) {
    modal.addEventListener("click", function(e) {
      // 이미지가 아닌 배경 클릭 시 닫힘
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});

/* ================= FAQ ACCORDION ================= */

document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function() {
      item.classList.toggle("active");
    });
  });
});

/* ================= 왼쪽메가메뉴 ================= */
document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split("/").pop();
  const subLinks = document.querySelectorAll(".sub-sidebar a");

  subLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
