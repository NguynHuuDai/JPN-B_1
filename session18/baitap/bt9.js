let hour = Number(prompt("Nhập vào giờ :"));
let minute = Number(prompt("Nhập vào phút :"));
let second = Number(prompt("Nhập vào giây :"));

if ( isNaN(hour) || isNaN(minute) || isNaN(second) ||  hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59 ) {
    document.write("Thông tin không hợp lệ");
} else {
    
    let time12 = hour >= 12 ? "PM" : "AM";

    let hour12 = hour % 12;
    hour12 = hour12 === 0 ? 12 : hour12; 

    
    let phut = minute < 10 ? "0" + minute : minute;
    let giay = second < 10 ? "0" + second : second;
    let gio = hour12 < 10 ? "0" + hour12 : hour12;

    
    document.write(gio + ":" + phut + ":" + giay + " " + time12);
}
