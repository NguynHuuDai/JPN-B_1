function sapXepChan(mang) {

    if (!Array.isArray(mang) || mang.some(so => so !== parseInt(so))) {
        return "dữ liệu không hợp lệ";
    }
    let soChan = mang.filter(so => so % 2 === 0).sort((a, b) => a - b);
    let index = 0;
    return mang.map(so => (so % 2 === 0 ? soChan[index++] : so));
}

console.log(sapXepChan([5, 2, 8, 1, 4])); 
console.log(sapXepChan([3, 7, 6, 2, 9, 4]));  
console.log(sapXepChan([10, 3, 5, 8, 2, 7]));
console.log(sapXepChan([1, 3, 5]));        
console.log(sapXepChan([2, 4, 6, 8]));     
console.log(sapXepChan(["abc", 2, 3]));    
console.log(sapXepChan([]));               
