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
