let n = parseInt(prompt("Nhập số lượng số Fibonacci cần hiển thị: "));

if (!isNaN(n) && Number.isInteger(n) && n > 0) {
    let a = 1, b = 1, kq = "1, 1";
    
    for (let i = 2; i < n; i++) {
        let next = a + b;
        kq += ", " + next;
        a = b;
        b = next;
    }
    
    alert("" + "Dãy Fibonacci với " + n + " số: " + kq);
} else {
    alert("Không hợp lệ");
}
