function checkPrime(number) {
    if (number < 0 || !isFinite(number)) {
        console.log("Đây không phải là số nguyên dương");
        return;
    }else{
        let count = 0;
        for (let i = 1; i < number; i++){
            if (number % i == 0) {
                count++;
            }
        }
        count == 1 ? console.log("Số nguyên tố.") : console.log("Không phải số nguyên tố.");
    }
}

let number = +prompt("Nhập vào một số bất kì.");
checkPrime(number);