let tongSoLe = 0;
for (let i = 1; i <= 5; i++) {
    let soNguyen = +prompt(`Nhập số nguyên thứ ${i}:`);

    if (!Number.isInteger(soNguyen)) {
        alert("Dữ liệu nhập vào không hợp lệ");
        continue; 
    }
    if (soNguyen % 2 !== 0) {
        tongSoLe += soNguyen;
    }
}
alert(`Tổng các số lẻ đã nhập là: ${tongSoLe}`);