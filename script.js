let isMenuOpen = false;

function toggleMenu() {
    const menu = document.getElementById('menu');
    isMenuOpen = !isMenuOpen;
    menu.classList.toggle('visible', isMenuOpen); // Sử dụng 'visible' để hiển thị menu
}

function loadPage(page) {
    alert('Chuyển đến trang: ' + page);
}

function login() {
    alert('Chức năng đăng nhập đang được phát triển!');
}

function signup() {
    alert('Chức năng đăng ký đang được phát triển!');
}

// Giả lập dữ liệu số dư
document.getElementById('balance').innerText = 100; // Số dư HTC
document.getElementById('frozen').innerText = 50; // Đóng băng
