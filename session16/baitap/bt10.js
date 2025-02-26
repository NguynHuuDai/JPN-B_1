let num1 = +prompt("Nhập số thứ nhất:");
let num2 = +prompt("Nhập số thứ hai:");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random = getRndInteger(num1, num2);

document.write("Số ngẫu nhiên: " + random);
