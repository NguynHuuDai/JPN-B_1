let arr = [];
let luaChon;

do {
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
    console.log("4. Tính tổng các phần tử trong mảng");
    console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát chương trình");

    luaChon = +prompt("Nhập lựa chọn của bạn ");

    switch (luaChon) {
        case 1:
            let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
            arr = [];
            for (let i = 0; i < n; i++) {
                let num;
                do {
                    num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
                } while (!Number.isInteger(Number(num)));
                arr.push(Number(num));
            }
            break;
            break;
        case 2:
            console.log(`Mảng hiện tại là ${arr}`);
            break;
        case 3:
            let max = arr[0];
            let min = arr[0];
            for (let i = 0; i < arr.length; i++){
                if (max < arr[i]) {
                    max = arr[i];
                }
                if (min > arr[i]) {
                    min = arr[i];
                }
            }
            console.log(`Số lớn nhất là ${max}`);
            console.log(`Số nhỏ nhất là ${min}`);

            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++)
                sum += arr[i];
            console.log(`Tổng các phần tử trong mảng là ${sum}`);
            break;
        case 5:
            let check = +prompt("Nhập phần tử muốn tìm kiếm");
            let Slxh = 0;
            for (let i = 0; i < arr.length; i++) {
                if (check == arr[i]) {
                    Slxh++;
                }
            }
            if (Slxh == 0) {
                console.log(`${check} không xuất hiện trong mảng`);
            } else {
                console.log(`Phần tử ${check} xuất hiện ${Slxh} lần trong mảng `);
            }
            
            break;
        case 6:
            let sapxep;
            for (let i = 0; i < arr.length - 1 ; i++) {
                for (let j = 0; j < arr.length - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        sapxep = arr[j];
                        arr[j] = arr[j + 1]
                        arr[j + 1] = sapxep;
                    }
                }
            }
            
            console.log(`Mảng sau khi sắp xếp ${arr}`);

            break;
    }
} while (luaChon !== 7);