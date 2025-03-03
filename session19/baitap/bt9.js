let result = “javascript” + 5; //  kết quả javascript5 giải thích : sử dụng toán tử + với một chuỗi và 1 số thì js sẽ tự động chuyển số thành chuỗi và thực hiện phép nối

let result = “javascript” - 1;   //kết quả sẽ ra NaN vì - không hoạt động với chuỗi mà javascript không phải là số nên kết quả là NaN
let result = “3” + 2;    // kết quả sẽ ra 32 vì toán tử ưu tiên nối chuỗi
let result = “5” - 4;  // kết quả sẽ ra 1 vì toán tử - không hoạt động với chuỗi sẽ tự động chuyển thành số và thực hiện tính toán//
let result =  isNaN( “123”); //kết quả ra false vì hàm isNaN kiểm tra xem cso phải NaN hay ko nếu là số sẽ ko ra NaN nên sẽ ra kq là false//
let result = isNaN(“hello”);  //kết quả sẽ ra true vì hàm isNaN kiểm tra xem cso phải NaN hay ko nếu là chữ ra ra true//
let result = Number.isNaN("123");// kết quả false   Number.isNaN() chỉ trả về true nếu đối số thực sự là NaN//      
let result = Number.isNaN(NaN);  //kq là true giá trị NaN sẽ trả về giá trị NaN thì kq sẽ là NaN//
