let library = {}; 

function getMaxId() {
    let maxId = 0;
    for (let id in library) {
        if (parseInt(id) > maxId) {
            maxId = parseInt(id);
        }
    }
    return maxId;
}

function addBook() {
    let id = getMaxId() + 1;
    let title = prompt("Nhập tên sách:")?.trim();
    let author = prompt("Nhập tên tác giả:")?.trim();
    let year = parseInt(prompt("Nhập năm xuất bản:"));
    let price = parseFloat(prompt("Nhập giá sách:"));
    let isAvailable = true;

    if (!title || !author || isNaN(year) || isNaN(price) || price <= 0) {
        console.log("Dữ liệu không hợp lệ!");
        return;
    }

    library[id] = { title, author, year, price, isAvailable };
    console.log(`Đã thêm sách: ID ${id}, Tên: ${title}, Tác giả: ${author}, Năm: ${year}, Giá: ${price}, Trạng thái: ${isAvailable ? 'Có sẵn' : 'Đang mượn'}`);
}

function displayBooks() {
    if (Object.keys(library).length === 0) {
        console.log("Thư viện trống!");
        return;
    }

    console.log("📖 Danh sách sách trong thư viện:");
    for (let id in library) {
        let book = library[id];
        console.log(`ID: ${id} | Tên: ${book.title} | Tác giả: ${book.author} | Năm: ${book.year} | Giá: ${book.price} | Trạng thái: ${book.isAvailable ? 'Có sẵn' : 'Đang mượn'}`);
    }
}

function searchBookByTitle() {
    let title = prompt("Nhập tiêu đề sách cần tìm:")?.trim();
    if (!title) {
        console.log("Tiêu đề không hợp lệ!");
        return;
    }

    let foundBooks = [];
    let keys = Object.keys(library);
    for (let i = 0; i < keys.length; i++) {
        let book = library[keys[i]];
        if (book.title.indexOf(title) !== -1) {
            foundBooks.push({
                id: keys[i],
                title: book.title,
                author: book.author,
                year: book.year,
                price: book.price,
                isAvailable: book.isAvailable
            });
        }
    }

    if (foundBooks.length > 0) {
        console.log("Sách tìm thấy:");
        for (let i = 0; i < foundBooks.length; i++) {
            let book = foundBooks[i];
            console.log(`ID: ${book.id} | Tên: ${book.title} | Tác giả: ${book.author} | Năm: ${book.year} | Giá: ${book.price} | Trạng thái: ${book.isAvailable ? 'Có sẵn' : 'Đang mượn'}`);
        }
    } else {
        console.log("Không tìm thấy sách nào!");
    }
}


function updateBookStatus() {
    let id = prompt("Nhập ID sách cần cập nhật trạng thái:");
    if (library[id]) {
        library[id].isAvailable = !library[id].isAvailable;
        console.log(`Đã cập nhật trạng thái sách ID ${id}: ${library[id].isAvailable ? 'Có sẵn' : 'Đang mượn'}`);
    } else {
        console.log("Không tìm thấy sách với ID này!");
    }
}

function removeBook() {
    let id = prompt("Nhập ID sách cần xóa:");
    if (library[id]) {
        delete library[id];
        console.log(`Đã xóa sách có ID: ${id}`);
    } else {
        console.log("Không tìm thấy sách với ID này!");
    }
}

function sortBooksByPrice() {
    let sortedBooks = Object.entries(library).sort((a, b) => a[1].price - b[1].price);
    console.log("Sách sắp xếp theo giá tăng dần:");
    sortedBooks.forEach(([id, book]) => {
        console.log(`ID: ${id} | Tên: ${book.title} | Giá: ${book.price}`);
    });
}

let choice;
do {
    choice = parseInt(prompt("🔹 Chọn chức năng:\n 1.Thêm sách\n 2.Hiển thị danh sách sách\n 3.ìm kiếm sách theo tiêu đề\n 4.Cập nhật trạng thái sách\n 5.Xóa sách\n 6.Sắp xếp sách theo giá\n 7.Thoát"));
    
    switch (choice) {
        case 1:
            addBook();
            break;
        case 2:
            displayBooks();
            break;
        case 3:
            searchBookByTitle();
            break;
        case 4:
            updateBookStatus();
            break;
        case 5:
            removeBook();
            break;
        case 6:
            sortBooksByPrice();
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại!");
    }
} while (choice !== 7);
