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
