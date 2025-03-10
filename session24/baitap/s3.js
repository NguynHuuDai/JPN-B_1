let arr = [];
let luaChon;
do {
    luaChon = +prompt("Nhập lựa chọn của bạn");
    // 1. Nhập mảng số nguyên
    // 2. Hiển thị mảng
    // 3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
    // 4. Tính tổng và trung bình cộng của các số dương trong mảng
    // 5. Đảo ngược mảng
    // 6. Kiểm tra mảng có đối xứng không
    // 7. Thoát chương trình

    switch (luaChon) {
        case 1:
            let n = +(prompt("Nhập số lượng phần tử của mảng:"));
            for (let i = 0; i < n; i++) {
                let num;
                do {
                    num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
                } while (!Number.isInteger(num));
                arr.push(num);
            }
            break;
        case 2:
            console.log("Mảng hiện tại:", arr);
            break;
        case 3:
            let max = arr[0];
            let index = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    index = i;
                }
            }
            console.log(`Phần tử lớn nhất: ${max}, vị trí: ${index}`);
            break;
        case 4:
            let sum = 0, count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    count++;
                }
            }
            let avg = count > 0 ? sum / count : 0;
            console.log(`Tổng số dương: ${sum}, Trung bình cộng: ${avg}`);
            break;
        case 5:
            arr.reverse();
            console.log("Mảng sau khi đảo ngược:", arr);
            break;
        case 6:
            let dxung = true;
            for (let i = 0; i < Math.floor(arr.length / 2); i++) {
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    dxung = false;
                    break;
                }
            }
            console.log(dxung ? "Mảng đối xứng" : "Mảng không đối xứng");
            break;
        case 7:
            console.log("Chương trình đã thoát.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
} while (luaChon !== 7);
