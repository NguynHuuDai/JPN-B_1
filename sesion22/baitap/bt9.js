let soNguyen = [3, 7, 1, 9, 3, 5, 3, 8, 6, 3];

let arr = [];
for (let i = 0; i < soNguyen.length; i++) {
    if (!arr.includes(soNguyen[i])) {
        arr.push(soNguyen[i]);
    }
}

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Mảng sau khi sắp xếp", arr);