let arr = [];
let luaChon;
do {
    luaChon = +prompt("Nhập lựa chọn của bạn");
        // 1. Nhập mảng 2 chiều
        // 2. Hiển thị mảng 2 chiều
        // 3. Tính tổng các phần tử trong mảng
        // 4. Tính tổng đường chéo chính
        // 5. Tính tổng đường chéo phụ
        // 6. Tính trung bình cộng các phần tử của một hàng hoặc một cột
        // 7. Thoát chương trình

    switch (luaChon) {
        case 1:
            let rows = +prompt("Nhập số hàng của mảng: ");
            let cols = +prompt("Nhập số cột của mảng: ");
            for (let i = 0; i < rows; i++) {
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    let num;
                    do {
                        num = prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}:`);
                    } while (!Number.isInteger(Number(num)));
                    arr[i][j] = Number(num);
                }
            }
            break;
        case 2:
            console.log("Mảng 2 chiều:");
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i].join(" "));
            }
            break;
        case 3:
            let Sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    Sum += arr[i][j];
                }
            }
            console.log(`Tổng các phần tử trong mảng: ${Sum}`);
            break;
        case 4:
            let duongCheo9 = 0;
            for (let i = 0; i < arr.length; i++) {
                duongCheo9 += arr[i][i];
            }
            console.log(`Tổng đường chéo chính: ${duongCheo9}`);
            break;
        case 5:
            let duongCheophu = 0;
            for (let i = 0; i < arr.length; i++) {
                duongCheophu += arr[i][arr.length - 1 - i];
            }
            console.log(`Tổng đường chéo phụ: ${duongCheophu}`);
            break;
        case 6:
            let choice = prompt("Bạn muốn tính trung bình cộng của hàng (H) hay cột (C)?").toUpperCase();
            if (choice === "H") {
                let row = +prompt("Nhập số hàng cần tính trung bình: ") - 1;
                if (row >= 0 && row < arr.length) {
                    let sum = arr[row].reduce((a, b) => a + b, 0);
                    console.log(`TBC của hàng ${row + 1}: ${sum / arr[row].length}`);
                } else {
                    console.log("Hàng không hợp lệ.");
                }
            } else if (choice === "C") {
                let col = +prompt("Nhập số cột cần tính trung bình: ") - 1;
                if (col >= 0 && col < arr[0].length) {
                    let sum = 0, count = 0;
                    for (let i = 0; i < arr.length; i++) {
                        sum += arr[i][col];
                        count++;
                    }
                    console.log(`TBC của cột ${col + 1}: ${sum / count}`);
                } else {
                    console.log("Cột không hợp lệ.");
                }
            } else {
                console.log("Lựa chọn không hợp lệ.");
            }
            break;
        case 7:
            console.log("Chương trình đã thoát.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
} while (luaChon !== 7);
