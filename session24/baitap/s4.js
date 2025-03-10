let arr = [];
let luaChon;
do {
    luaChon = +prompt("Nhập lựa chọn của bạn");
    // 1. Nhập mảng 2 chiều
    // 2. Hiển thị mảng 2 chiều
    // 3. Tính tổng các phần tử trong mảng
    // 4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
    // 5. Tính trung bình cộng các phần tử của một hàng cụ thể
    // 6. Đảo ngược các hàng trong mảng
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
            let max = arr[0][0];
            let maxRow = 0, maxCol = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                        maxRow = i;
                        maxCol = j;
                    }
                }
            }
            console.log(`Phần tử lớn nhất: ${max}, vị trí: hàng ${maxRow + 1}, cột ${maxCol + 1}`);
            break;
        case 5:
            let r = +(prompt("Nhập số hàng: ")) - 1;
            if (r >= 0 && r < arr.length) {
            let s = 0;
            for (let i = 0; i < arr[r].length; i++) {
                s += arr[r][i];
            }
            let avg = s / arr[r].length;
            console.log(`TBC của hàng ${r + 1}: ${avg}`);
            } else {
                console.log("Hàng không hợp lệ.");
            }

            break;
        case 6:
            for (let i = 0; i < Math.floor(arr.length / 2); i++) {
                let temp = arr[i];
                arr[i] = arr[arr.length - 1 - i];
                arr[arr.length - 1 - i] = temp;
            }
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0, k = arr[i].length - 1; j < k; j++, k--) {
                    let temp = arr[i][j];
                    arr[i][j] = arr[i][k];
                    arr[i][k] = temp;
                }
            }
            break;  
            
    }  
} while (luaChon !== 7);