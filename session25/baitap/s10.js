function printMenu() {
    console.log("Danh sách sản phẩm có sẵn:");
    products.forEach(item => {
        console.log(`${item[0]} - Số lượng: ${item[1]} - Giá: ${item[2]} VND`);
    });
}

function searchMenu(products) {
    let name = prompt("Nhập vào tên sản phẩm:");
    let found = false;

    for (let i = 0; i < products.length; i++) {
        if (name === products[i][0]) {
            found = true;
            if (products[i][1] > 0) {
                products[i][1]--;

                let check = false;
                for (let j = 0; j < cart.length; j++) {
                    if (cart[j][0] === name) {
                        cart[j][1]++;
                        check = true;
                        break;
                    }
                }
                if (!check) {
                    cart.push([name, 1, products[i][2]]);
                }

                console.log(`Đã thêm ${name} vào giỏ hàng.`);
            } else {
                console.log("Sản phẩm đã hết hàng.");
            }
            return;
        }
    }

    if (!found) {
        console.log("Sản phẩm không có trong cửa hàng.");
    }
}
function bill(cart) {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }   
    let total = 0;
    console.log("Hóa đơn của bạn:");
    for (let i = 0; i < cart.length; i++) {
        let itemTotal = cart[i][1] * cart[i][2];
        total += itemTotal;
        console.log(`${cart[i][0]} - Số lượng: ${cart[i][1]} - Đơn giá: ${cart[i][2]} - Tổng: ${itemTotal}`);
    }
    console.log(`Tổng tiền: ${total} VND`);
}

let products = [["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]];
let cart = [];
let luaChon;
do {
    luaChon = Number(prompt("Nhập vào lựa chọn:\n1. Xem danh sách sản phẩm\n2. Mua hàng\n3. Xem hóa đơn\n4. Thoát"));

    switch (luaChon) {
        case 1:
            printMenu();
            break;
        case 2:
            searchMenu(products);
            break;
        case 3:
            bill(cart);
            break;
        case 4:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Chức năng không tồn tại");
    }
} while (luaChon !== 4);
