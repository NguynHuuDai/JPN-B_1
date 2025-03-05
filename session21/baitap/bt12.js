for (let i = 0; i < 10; i++) {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let color = `rgb(${a}, ${b}, ${c})`;
    console.log(`%c Màu ngẫu nhiên ${i + 1}`, `color: ${color}; font-size: 16px; font-weight: bold;`);
}
