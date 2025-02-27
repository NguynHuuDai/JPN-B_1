let r = prompt("Nhập vào bán kính của hình cầu :");
let x = Math.PI;
let Vcau = 4/3 * x * r * r * r;
let Scau = 4 * x * r * r;
let Pcau = 2 * x * r;
document.write("Thể tích hình cầu là ",Vcau.toFixed(2));
document.write("<br>Diện tích hình cầu là ",Scau.toFixed(2));
document.write("<br>Chu vi hình cầu là ",Pcau.toFixed(2));

