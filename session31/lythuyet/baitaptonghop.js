let students=["minh thu", "thảo phương","hồng vân"];
// fungciton hiển thị danh sách sinh viên

function showStudent(){
    let text="";
    for (let i = 0; i < students.length; i++) {
        text+=`<li>${students[i]}</li>`
    }
    document.getElementById("content").innerHTML=text;
}
showStudent();
function addStudent() {
    // lấy giá trị người dùng nhập
    let name= document.getElementById("student").value;
    console.log("name",name);
    // thêm sinh viên vào mảng
    students.push(name);
    showStudent();
    document.getElementById("student").value="";
}