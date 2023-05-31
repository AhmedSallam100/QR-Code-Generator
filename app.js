let qrCode = document.querySelector(".qr-code");
let qrImg = document.querySelector(".qr-img");
let input = document.querySelector("input");
let btn = document.querySelector("button");

function generateQr() {
  if (!input.value == "") {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
    qrCode.classList.add("show-img");
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
  }
}

btn.addEventListener("click", generateQr);
