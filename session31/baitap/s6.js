const oTen = document.getElementById("ten");
const oMatKhau = document.getElementById("matkhau");
const nutDangNhap = document.getElementById("nutDangNhap");

const tenDung = "huanrose@gmail.com";
const mkDung = "123456";

nutDangNhap.addEventListener("click", function() {
    if (oTen.value === tenDung && oMatKhau.value === mkDung) {
        console.log("Đăng nhập thành công!");
    } else {
        console.log("Đăng nhập thất bại!");
    }
});