const cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];

function tinhTien(cart) {
    let money = 0;
    cart.forEach(item => {
        money += item.price * item.quantity;
    });
    return money;
}

console.log("Tổng tiền giỏ hàng:", tinhTien(cart) + " VND");
