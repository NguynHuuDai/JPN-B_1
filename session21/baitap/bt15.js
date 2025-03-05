let soTien = parseInt(prompt("Nhập số tiền cần rút (phải chia hết cho 1000): "));
if (soTien % 1000 !== 0) {
    console.log("Số tiền nhập không hợp lệ!");
} else {
    let to500k = Math.floor(soTien / 500000);
    soTien -= to500k * 500000;

    let to200k = Math.floor(soTien / 200000);
    soTien -= to200k * 200000;

    let to100k = Math.floor(soTien / 100000);
    soTien -= to100k * 100000;

    let to50k = Math.floor(soTien / 50000);
    soTien -= to50k * 50000;

    let to20k = Math.floor(soTien / 20000);
    soTien -= to20k * 20000;

    let to10k = Math.floor(soTien / 10000);
    soTien -= to10k * 10000;

    let to5k = Math.floor(soTien / 5000);
    soTien -= to5k * 5000;

    let to2k = Math.floor(soTien / 2000);
    soTien -= to2k * 2000;

    let to1k = Math.floor(soTien / 1000);
    soTien -= to1k * 1000;

    document.write("<h3>Số tờ tiền được rút:</h3>");
    if (to500k > 0) document.write("500.000: " + to500k + " tờ<br>");
    if (to200k > 0) document.write("200.000: " + to200k + " tờ<br>");
    if (to100k > 0) document.write("100.000: " + to100k + " tờ<br>");
    if (to50k > 0) document.write("50.000: " + to50k + " tờ<br>");
    if (to20k > 0) document.write("20.000: " + to20k + " tờ<br>");
    if (to10k > 0) document.write("10.000: " + to10k + " tờ<br>");
    if (to5k > 0) document.write("5.000: " + to5k + " tờ<br>");
    if (to2k > 0) document.write("2.000: " + to2k + " tờ<br>");
    if (to1k > 0) document.write("1.000: " + to1k + " tờ<br>");    
}
