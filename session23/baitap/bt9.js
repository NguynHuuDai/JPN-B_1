let arr = [];
let luaChon;

do {
    console.log("================== MENU ===================");
    console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử");
    console.log("2. In ra giá trị các phần tử đang quản lý");
    console.log("3. In ra giá trị các phần tử chẵn và tính tổng");
    console.log("4. In ra giá trị lớn nhất và nhỏ nhất trong mảng");
    console.log("5. In ra các phần tử là số nguyên tố trong mảng và tính tổng");
    console.log("6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó");
    console.log("7. Thêm một phần tử vào vị trí chỉ định");
    console.log("8. Thoát");
    console.log("============================================");
    
    luaChon = +(prompt("Lựa chọn của bạn: "));
    
    switch (luaChon) {
        case 1:
            let n = +(prompt("Nhập số lượng phần tử của mảng: "));
            arr = [];
            for (let i = 0; i < n; i++) {
                arr.push(+(prompt(`Nhập phần tử thứ ${i + 1}: `)));
            }
            break;
        case 2:
            console.log("Mảng hiện tại:", arr);
            break;
        case 3:
            let tongSochan = 0;
            console.log("Các số chẵn trong mảng:");
            for (let i = 0; i < arr.length; i++) {
                if (!(arr[i] % 2)) {
                    console.log(arr[i]);
                    tongSochan += arr[i];
                }
            }
            console.log("Tổng:", tongSochan);
            break;
        case 4:
            let max = arr[0];
            let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                max = arr[i] > max ? arr[i] : max;
                min = arr[i] < min ? arr[i] : min;
            }
            console.log("Số lớn nhất:", max);
            console.log("Số nhỏ nhất:", min);
            break;
        case 5:
            console.log("Các số nguyên tố trong mảng:");
            let tsnt = 0;
            for (let i = 0; i < arr.length; i++) {
                let soNgto = arr[i] >= 2;
                for (let j = 2; j * j <= arr[i] && soNgto; j++) {
                    soNgto = arr[i] % j !== 0;
                }
                if (soNgto) {
                    console.log(arr[i]);
                    tsnt += arr[i];
                }
            }
            console.log("Tổng:", tsnt);
            break;
        case 6:
            let num = +(prompt("Nhập số cần thống kê: "));
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                count += arr[i] === num ? 1 : 0;
            }
            console.log(`Số lần xuất hiện của ${num}:`, count);
            break;
        case 7:
            let viTri = +(prompt("Nhập vị trí cần chèn: "));
            let value = +(prompt("Nhập giá trị cần chèn: "));
            if (viTri >= 0 && viTri <= arr.length) {
                for (let i = arr.length; i > viTri; i--) {
                    arr[i] = arr[i - 1];
                }
                arr[viTri] = value;
                console.log("Mảng sau khi chèn:", arr);
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;
        case 8:
            console.log("Chương trình kết thúc.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (luaChon !== 8);
