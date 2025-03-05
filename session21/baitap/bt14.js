let w = parseInt(prompt("Nhập chiều rộng của hình chữ nhật:"));
let h = parseInt(prompt("Nhập chiều cao của hình chữ nhật:"));

let result = ""; 

for (let i = 0; i < h; i++) {
    if (i === 0 || i === h - 1) {
        result += '*'.repeat(w) + "\n";
    } else {
        result += '*' + ' '.repeat(w - 2) + '*\n';
    }
}

console.log(result); 