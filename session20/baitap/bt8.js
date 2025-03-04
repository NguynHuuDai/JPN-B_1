let n = parseInt(prompt("Nhập số lượng số nguyên tố cần hiển thị: "));

// Kiểm tra điều kiện nhập vào
if (!isNaN(n) && Number.isInteger(n) && n > 0) {
    let arr = [];
    let num = 2;
    
    while (arr.length < n) {
        let check = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                check = false;
                break;
            }
        }
        if (check) {
            arr.push(num);
        }
        num++;
    }
    
    alert(`Danh sách ${n} số nguyên tố đầu tiên: ` + arr.join(", "));
} else {
    alert("Không hợp lệ");
}

