let num = prompt("Nhập vào một chuỗi kí tự");
let kq = num.indexOf("0"||" 1 "|| "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" ); //nếu trả về - 1 là ko có số 

if(kq != -1){
    document.write("Đây là chữ cái");
}else{
    document.write("Đây không phải chữ cái");
}