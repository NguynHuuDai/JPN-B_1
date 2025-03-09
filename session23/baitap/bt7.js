let arr = [];
let n = +(prompt("Nhập số lượng phần tử của mảng: "));

if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    for (let i = 0; i < n; i++) {
        arr.push(+(prompt(`Nhập phần tử thứ ${i + 1}: `)));
    }

    if (arr.length < 2) {
        console.log("Không thể tìm số lớn thứ hai do mảng không đủ phần tử");
    } else {
        arr.sort((a, b) => b - a);
        let max = arr[0];
        let solont2;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < max) {
                solont2 = arr[i];
                break;
            }
        }

        console.log("Số lớn thứ hai là:", solont2);
    }
}
