let employees = {}; 

function getMaxId() {
    let maxId = 0;
    for (let id in employees) {
        if (parseInt(id) > maxId) {
            maxId = parseInt(id);
        }
    }
    return maxId;
}

function addEmployee() {
    let id = getMaxId() + 1; 
    let name = prompt("Nhập tên nhân viên:");
    let position = prompt("Nhập vị trí:");
    let salary = parseFloat(prompt("Nhập lương:"));

    if (!name || !position || isNaN(salary)) {
        console.log("Dữ liệu không hợp lệ!");
        return;
    }

    employees[id] = { name, position, salary };
    console.log("Đã thêm nhân viên:", employees[id]);
}

function removeEmployee() {
    let id = prompt("Nhập ID nhân viên cần xóa:");
    if (employees[id]) {
        let confirmDelete = confirm(`Bạn có chắc muốn xóa nhân viên ${employees[id].name} không?`);
        if (confirmDelete) {
            delete employees[id];
            console.log(`Đã xóa nhân viên có ID: ${id}`);
        }
    } else {
        console.log("Không tìm thấy nhân viên với ID:", id);
    }
}

function updateSalary() {
    let id = prompt("Nhập ID nhân viên cần cập nhật lương:");
    if (employees[id]) {
        let newSalary = parseFloat(prompt("Nhập mức lương mới:"));
        if (!isNaN(newSalary) && newSalary > 0) {
            employees[id].salary = newSalary;
            console.log(`Đã cập nhật lương cho ${employees[id].name}`);
        } else {
            console.log("Lương không hợp lệ!");
        }
    } else {
        console.log("Không tìm thấy nhân viên với ID:", id);
    }
}

function searchEmployeeByName() {
    let name = prompt("Nhập tên nhân viên cần tìm:");
    let found = false;

    for (let id in employees) {
        if (employees[id].name.toLowerCase().includes(name.toLowerCase())) {
            console.log(`ID: ${id}, Tên: ${employees[id].name}, Vị trí: ${employees[id].position}, Lương: ${employees[id].salary}`);
            found = true;
        }
    }

    if (!found) {
        console.log("Không tìm thấy nhân viên nào với tên:", name);
    }
}

let choice;
do {
    choice = parseInt(prompt("Chọn chức năng:\n1. Thêm nhân viên\n2. Xóa nhân viên\n3. Cập nhật lương\n4. Tìm kiếm nhân viên\n5. Thoát"));

    switch (choice) {
        case 1:
            addEmployee();
            break;
        case 2:
            removeEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            searchEmployeeByName();
            break;
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại!");
    }


} while (choice !== 5);
