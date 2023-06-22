const qrCode = document.getElementById("qrCodeImg");
const linkInput = document.getElementById("linkInput");
const generateBtn = document.getElementById("generate");
const api = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=";

generateBtn.addEventListener("click", () => {
    let alert = document.getElementById("alert");
    let success_alert = document.getElementById("success_alert");

    if (linkInput.value != "") {
        success_alert.classList.remove("d-none");
        success_alert.classList.add("d-block");
        alert.classList.add("d-none");
    } else{
        alert.classList.remove("d-none");
        alert.classList.add("d-block");
        success_alert.classList.add("d-none");
    }

    let newQR = api + linkInput.value;
    qrCode.src = newQR;
    
});

