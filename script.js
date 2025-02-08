function generateQRCode() {
    let text = document.getElementById("text-input").value;
    let qrContainer = document.getElementById("qrcode");
    let downloadBtn = document.getElementById("download-btn");

    // Xóa QR code cũ (nếu có)
    qrContainer.innerHTML = "";

    if (text.trim() !== "") {
        let qr = new QRCode(qrContainer, {
            text: text,
            width: 200,
            height: 200
        });

        // Thêm hiệu ứng xuất hiện
        setTimeout(() => {
            qrContainer.classList.add("show");
            downloadBtn.style.display = "inline-block";
        }, 100);
    } else {
        alert("Vui lòng nhập nội dung!");
    }
}

// Chức năng tải QR Code
function downloadQRCode() {
    let qrCanvas = document.querySelector("#qrcode canvas");
    if (qrCanvas) {
        let link = document.createElement("a");
        link.href = qrCanvas.toDataURL("image/png");
        link.download = "qrcode.png";
        link.click();
    }
}
