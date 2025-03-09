let n = +(prompt("Nhập số lượng phần tử của mảng: "));

if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+(prompt(`Nhập phần tử thứ ${i + 1}: `)));
    }
    
    console.log("Mảng nhập vào:", arr);
    
    if (arr.length === 0) {
        console.log("Không phải dãy số fibonacci");
    } else if (arr.length === 1 && arr[0] === 0) {
        console.log("Là dãy số fibonacci");
    } else if (arr.length === 2 && arr[0] === 0 && arr[1] === 1) {
        console.log("Là dãy số fibonacci");
    } else {
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                console.log("Không phải dãy số fibonacci");
                return;
            }
        }
        console.log("Là dãy số fibonacci");
    }
}
