let a = 10;
    console.log(`a`)
for (let i = a; i >= 1; i--) {
    console.log('*'.repeat(i));
}

let b = 10;
    console.log(`b`)
for (let i = 1; i <= b; i++) {
    console.log('*'.repeat(i));
}

let c = 10;  
console.log(`c`);
for (let i = 1; i <= c; i++) {
    console.log(' '.repeat(c - i) + '*'.repeat(i));
}

let d = 10;  
console.log(`c`);

for (let i = d; i >= 1; i--) {
    console.log(' '.repeat(d - i) + '*'.repeat(i));
}
