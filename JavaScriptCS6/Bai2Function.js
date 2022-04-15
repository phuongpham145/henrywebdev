const congHaiSo = (x, y) => {
    return x + y;
}
const tong = congHaiSo(1, 2)
console.log(tong);

const vietTen = (ten) => {
    console.log(ten);
}

vietTen('Hai');

const vietTen2 = ten => console.log(ten);
vietTen2('Pham')

const nhanDoi = x => x*2;
console.log(nhanDoi(4))