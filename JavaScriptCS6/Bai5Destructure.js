const buaAn = {
    buaSang : 'xoi',
    buaTrua : 'pho',
    buaToi : 'com'
}
const traiCay = ['cam', 'quyt', 'mit']

console.log(`Sang nay toi an ${buaAn.buaSang}`)
console.log(`Trua nay toi an ${buaAn.buaTrua}`)
console.log(`Toi nay toi an ${buaAn.buaToi}`)

const [cam, quyt, mit] = traiCay

console.log(`Qua so 0 la qua ${cam}`)
console.log(`Qua so 1 la qua ${quyt}`)
console.log(`Qua so 2 la qua ${mit}`)

const sinhVien = {
    ten : 'Phuong',
    tuoi : 18
}
 
const {ten, tuoi} = sinhVien
console.log(`Ten toi la ${ten} - ${tuoi} tuoi .`)