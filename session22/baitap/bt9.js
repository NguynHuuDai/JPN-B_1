let soNguyen = [1,2,52,5,3,64,576,7,4,53,3];

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

