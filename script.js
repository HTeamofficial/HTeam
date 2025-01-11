function reloadPage() {
    location.reload(); // Tải lại trang
}

function login() {
    // Logic đăng nhập
    alert("Chức năng đăng nhập chưa được cài đặt!");
}

function signup() {
    // Logic đăng ký
    alert("Chức năng đăng ký chưa được cài đặt!");
}

// Giả lập số dư để hiển thị
document.getElementById('balance').innerText = (Math.random() * 1000).toFixed(2);
document.getElementById('frozen').innerText = (Math.random() * 500).toFixed(2);
