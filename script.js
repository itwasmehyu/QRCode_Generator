function generateQRCode() {
    let text = document.getElementById("text-input").value;
    let qrContainer = document.getElementById("qrcode");
    let downloadBtn = document.getElementById("download-btn");

    // Xóa QR code cũ trước khi tạo mới
    qrContainer.innerHTML = "";
    qrContainer.classList.remove("expired");
    downloadBtn.style.display = "none";

    if (text.trim() !== "") {
        let qr = new QRCode(qrContainer, {
            text: text,
            width: 200,
            height: 200
        });

        qrContainer.classList.add("show");
        downloadBtn.textContent = "Download";
        downloadBtn.style.display = "inline-block";

        // Sau 5 giây, đổi thành "Nhập lại URL" và gạch chéo QR code
        setTimeout(() => {
            downloadBtn.textContent = "QR Code expired, please type URL in search bar!";
            downloadBtn.onclick = () => location.reload();
            qrContainer.classList.add("expired");
        }, 600000);
    } else {
        alert("Please enter!");
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

// **ĐỂ ĐẨY MÃ NGUỒN LÊN GITHUB**
// # Di chuyển đến thư mục chứa dự án (nếu chưa)
// cd đường-dẫn-thư-mục-dự-án

// # Khởi tạo Git trong thư mục
// git init

// # Kết nối với repo trên GitHub (thay thế bằng link repo của bạn)
// git remote add origin https://github.com/username/qr-code-generator.git

// # Thêm tất cả file vào Git
// git add .

// # Commit thay đổi
// git commit -m "Initial commit"

// # Đẩy lên GitHub
// git branch -M main
// git push -u origin main



// **ĐỂ CẬP NHẬT TRÊN GIHUB**
// # Kiểm tra trạng thái thay đổi
// git status  

// # Thêm tất cả file đã chỉnh sửa vào Git
// git add .

// # Ghi lại thay đổi với một commit message
// git commit -m "Cập nhật giao diện và hiệu ứng QR Code"

// # Đẩy code lên GitHub
// git push origin main
