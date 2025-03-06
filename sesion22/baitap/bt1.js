let party = [];

party.unshift("Đào");
party.push("Lê");
party.splice(2, 0, "Trần", "Dương");

for(let i = 0; i <= party.length-1; i++){
    console.log(party[i]);
}