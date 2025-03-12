let number = prompt("Nhập vào một số");

if (!isNaN(number) && !Number.isInteger(number)) {
    number = number.split("").reverse().join(""); 
    console.log("Số sau khi đảo ngược:", number);
} else {
    console.log("Thông tin không hợp lệ");
}
