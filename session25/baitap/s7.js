function chuoi(str) {
    str = str.toLowerCase();
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(' ');
}


let chuoi = prompt("Nhập chuỗi: ");     
let result = chuoi(chuoi); 
console.log(result);
