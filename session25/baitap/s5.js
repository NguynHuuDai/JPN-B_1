function soNguyenduong(arr) {
    if (!Array.isArray(arr)) {
        console.log("Mảng không hợp lệ");
        return;
    }
    let count = 0;
    for (let i = 0; i < arr.length ; i++){
        if (arr[i] > 0 && Number.isInteger(arr[i])) {
            count++;
        }  
    }
    console.log(count === 0 ? "Không có số nguyên dương trong mảng" : count);
}

soNguyenduong();
soNguyenduong("abc");                 
soNguyenduong([34,-3,2.3]);                   
soNguyenduong(); 