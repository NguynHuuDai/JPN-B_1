let arr = ["2", "5", "7", "4", "1", "8", "6"];
let number = prompt("Nhập vào một số bất kì").trim(); 
let check = isNaN(number);
let flag = 0;

if (!check) {
    for (let i = 0; i < arr.length; i++) { 
        if (number === arr[i]) { 
            flag++; 
            break; 
        }
    }
    flag !== 0 ? console.log("Bingo") : console.log("Chúc bạn may mắn lần sau"); 
} else {
    console.log("Đây không phải là số");
}
