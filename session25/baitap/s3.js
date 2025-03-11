function checkIsOdd(arr) {
    let arrNew = [];
    if (Array.isArray(arr)) {
        for (let i = arr.length - 1; i >= 0; i--){
            if (arr[i] % 2 == 0) {
                arrNew.push(arr[i]);
            }           
        }
        arrNew.length > 0 ? console.log(arrNew) : console.log("Mảng không chứa số chẵn");
    } else {
        console.log("Dữ liệu không hợp lệ");
    }

}

checkIsOdd([3, 4, 6, 3, 2, 6, 7, 9, 4, 3, 4, , 65, 7, 8, 6]);


