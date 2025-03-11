function sum(a, b) {
    if(Number.isInteger(a) && Number.isInteger(b)){
        return a+b;
    } else {
        console.log("Giá trị nhập không hợp lệ");
    }
}
let a = +prompt("Nhập số thứ nhất");
let b = +prompt("Nhập số thứ hai");

console.log(sum(a, b));