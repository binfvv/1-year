// Di chuyển sang ô tiếp theo khi nhập
function nextInput(currentInput, index) {
  if (currentInput.value.length === 1 && index < 3) {
    document.querySelectorAll('.code')[index + 1].focus();
  }
}

// Xử lý nút Backspace để lui về ô trước
function handleKey(event, index) {
  const inputs = document.querySelectorAll('.code');
  if (event.key === "Backspace") {
    if (inputs[index].value === "" && index > 0) {
      inputs[index - 1].focus();
      inputs[index - 1].value = ""; // Xoá luôn ô trước
      event.preventDefault(); // Ngăn xoá lặp
    }
  }
}

// Kiểm tra mã đúng/sai
function checkPassword() {
  const inputs = document.querySelectorAll('.code');
  let code = '';
  inputs.forEach(input => {
    code += input.value;
  });

  const correctCode = "0208";

  if (code === correctCode) {
    window.location.href = "main.html";
  } else {
    showErrorPopup(); // Hiện popup
    inputs.forEach(input => input.value = "");
    inputs[0].focus();
  }
}

function showErrorPopup() {
  document.getElementById("error-popup").style.display = "flex";
}

function closeErrorPopup() {
  document.getElementById("error-popup").style.display = "none";
}
