let arr = [];
let luaChon;
let arrChan = [];
let arrLe = [];
do {
    luaChon = +prompt("Nhập lựa chọn của bạn");
    // 1. Nhập mảng số nguyên
    // 2. Hiển thị mảng
    // 3. Tìm các phần tử chẵn và lẻ   
    // 4. Tính trung bình cộng của mảng
    // 5. Xóa phần tử tại vị trí chỉ định
    // 6. Tìm phần tử lớn thứ hai trong mảng
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
            console.log(`Mảng hiện tại ${arr}`);
            break;
        case 3:
            arrChan = []; 
            arrLe = [];   
            for (let i = 0; i < arr.length; i++) { 
                if (arr[i] % 2 === 0) {
                    arrChan.push(arr[i]);
                } else {
                    arrLe.push(arr[i]);
                }
            }
            console.log(`Các phần tử là số chẵn: ${arrChan}`);
            console.log(`Các phần tử là số lẻ: ${arrLe}`);
            break;
        case 4:
            let tbc = 0;
            for (let i = 0; i < arr.length; i++) {
                tbc += arr[i];
            }
            if (arr.length > 0) {
                tbc = tbc / arr.length;
                console.log(`Trung bình cộng của mảng là: ${tbc}`);
            } else {
                console.log("Mảng rỗng, không thể tính trung bình cộng!");
            }
            break;
        case 5:
            let dlte = prompt(`Vị trí phần tử cần xóa`);
            arr.splice(dlte, 1);
            break;
        case 6:
            let temp;
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
    
                    }
                }
            }
            console.log(`Giá trị lớn thứ hai của mảng là ${arr[arr.length-2]}`);
            break;
        default:
            console.log("Giá trị không hợp lệ");
    }
    
} while (luaChon !== 7);