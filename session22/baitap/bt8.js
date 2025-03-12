// let soNguyen = [3, 7, 1, 9, 3, 5, 3, 8, 6, 3];

// let tanSuat = {};
// for (let i = 0; i < soNguyen.length; i++) {
//     let so = soNguyen[i];
//     tanSuat[so] = (tanSuat[so] || 0) + 1;
// }
// let maxDem = 0;
// let check = 1;
// for (let so in tanSuat) {
//     if (tanSuat[so] > maxDem || (tanSuat[so] === maxDem && Number(so) < check)) {
//         maxDem = tanSuat[so];
//         check = Number(so);
//     }
// }
// console.log("Mảng số nguyên:", soNguyen);
// console.log(`Phần tử xuất hiện nhiều nhất: ${check} (xuất hiện ${maxDem} lần)`);


let arr = [3, 7, 1, 9, 3, 5, 3, 8, 6, 3];
let maxCout=0;
let minElement;
for (let i = 0; i < arr.length; i++){
    let cout = 0;
    for (let j = 0; i < arr.length; j++){
        if (arr[i] == arr[j]) {
            cout++;
        }
    }
    if (cout > maxCout) {
        maxCout = cout;
        minElement = arr[i];
    } else if (cout == maxCout && minElement > arr[i]) {
        minElement = arr[i];
    }
}
console.log(`Kết quả ${minElement}`);