let num = +prompt("Nhập vào số nguyên bất kì");
let check = isNaN(num);
if( !check && Number.isInteger(num)){
    for(let i = 0 ;i <= Math.abs(num) ; i++){
    if(num % i == 0){
        document.write(`${i}  `);
    }
}
}else{
    document.write("Thông tin nhập không hợp lệ");
}
