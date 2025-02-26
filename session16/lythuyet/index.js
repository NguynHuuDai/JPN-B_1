/* 
    viết chương trình cho người dùng nhập vào 2 số bất kì
    tính tổng 2 số đó.
    1. khi cho người dùng nhập phải dùng prompt
    2. tạo biến để lấy giá trị người dùng nhập
    3. tạo biến lưu kết quả tổng 2 số
*/
/* 
    var có từ khi js ra đời (1995)
    let  (ra đời phiên bản ES6_2015)
    const 
*/
let numberA= Number(prompt("mời bạn nhập số thứ nhất"));
// giá trị sẽ là string "4"
// ép kiểu dữ liệu
let numberB= +prompt("mời bạn nhập số thứ hai");
// giá trị sẽ là string "6" ==> "46"
let sum=numberA+numberB;
console.log("giá trị của 2 số vừa nhập là:",sum);
// let numberC="5";
// let numberD= Number(numberC);
// console.log("kiểu dữ liệu của numberD", typeof (numberD));
// VIẾT CHƯƠNG TRÌNH CHO NGƯỜI DÙNG NHẬP VÀO ĐIỂM SỐ 3 MÔN
// TOÁN LÝ HÓA , TÍNH ĐIỂM TRUNG BÌNH 3 MÔN.