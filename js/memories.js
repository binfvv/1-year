const imageList = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg",
  "images/photo8.jpg",
  "images/photo9.jpg",
  "images/photo10.jpg",
  "images/photo11.jpg",
];

let currentIndex = 0;
const mainImage = document.getElementById("mainImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImage(index) {
  mainImage.src = imageList[index];
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageList.length;
  showImage(currentIndex);
});

let startX = 0;
mainImage.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
mainImage.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) {
    prevBtn.click();
  } else if (startX - endX > 50) {
    nextBtn.click();
  }
});
