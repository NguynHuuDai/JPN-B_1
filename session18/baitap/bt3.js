// Viết chương trình kiểm tra đăng nhập hệ thống của người dùng.
// Yêu cầu người dùng nhập tên từ bàn phím.
// Nếu tên nhập vào là ADMIN thì yêu cầu nhập mật khẩu :
// Nếu mật khẩu là TheMaster thì in ra chuỗi Welcome.
// Nếu mật khẩu nhập vào là null in ra chuỗi Cancelled.
// Còn lại in ra chuỗi Wrong password.
// Nếu tên nhập vào là null in ra chuỗi Cancelled
// Còn lại in ra chuỗi “I Don’t know you”

let ADMIN = "ADMIN";
let pass = "TheMaster";

let name = prompt("Vui lòng nhập tên:");

if (name === ADMIN) {
    let pass1 = prompt("Vui lòng nhập mật khẩu:");

    if (pass1 === pass) {
        document.write("Welcome");
    } else if (pass1 === null || pass1 === "") {
        document.write("Cancelled");
    } else {
        document.write("Wrong password");
    }
} else if (name === null || name === "") {
    document.write("Cancelled");
} else {
    document.write("I Don’t know you");
}
