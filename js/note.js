function openPopup() {
  document.getElementById('popupOverlay').classList.add('active');
  // Khóa scroll khi popup mở
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('popupOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Đóng popup khi bấm ESC
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    closePopup();
  }
});

// Đóng popup khi click ra ngoài popup-letter
document.getElementById('popupOverlay').addEventListener('click', function(e) {
  if (e.target === this) {
    closePopup();
  }
});
