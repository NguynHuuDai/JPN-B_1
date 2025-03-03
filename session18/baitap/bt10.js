let number= +prompt("Mời bạn nhập số từ 0-999");
let phanTram= Math.floor(number/100);
let phanChuc= Math.floor((number%10)/10);
let phanDonvi= number%10;
let result="";
if(number>0){
    if(phanTram==1){
        result+="Một trăm";
    }else if(phanTram==2){
        result+="Hai trăm";
    }else if(phamTram==3){
        result+="Ba trăm";
    }
}
if(phanChuc>0){
    if(phanChuc==1){
        result+="Mười";
    }else if(phanChuc==2){
        result+="Hai mươi";
    }else if(phanChuc==3){
        result+="Ba mươi";
    }
}

if(phanDonVi>0){
    if(phanDonvi==1){
        result+="Một";
    }else if(phanDonvi==2){
        result+="Hai";
    }else if(phanDonvi==3){
        result+="Ba";
    }
}