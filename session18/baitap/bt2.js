// Nhập điểm 3 môn Toán, Văn, Anh, sau đó tính điểm trung bình và xếp loại học lực:

// >= 8.0: Giỏi
// 6.5 - 7.9: Khá
// 5.0 - 6.4: Trung bình
// < 5.0: Yếu

let toan = Number(prompt("Nhập vào điểm toán : "));
let van = Number(prompt("Nhập vào điểm văn : "));
let anh = Number(prompt("Nhập vào điểm anh : "));
let tbm = (toan + van + anh)/3;
    if(8 <= tbm && tbm <= 10){
        document.write("Giỏi");
    }else if(6.5 <= tbm && tbm <= 7.9){
        document.write("Khá");
    }else if(5.0 <= tbm && tbm <= 6.4){
        document.write("Trung bình");
    }else if(0.0 <= tbm && tbm <= 5.0){
        document.write("Yếu");
    }else{
        document.write("Giá trị nằm ngoài phạm vi");
    }

