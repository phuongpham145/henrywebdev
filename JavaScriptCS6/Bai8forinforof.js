const buaAn = {
    buaSang: 'xoi',
    buaTrua: 'pho',
    buaToi: 'com'
}
const bangChuCai = ['a', 'b', 'c']
for(let moiBuaAn in buaAn) console.log(moiBuaAn)
for(let moiChuCai in bangChuCai) console.log(moiChuCai)
for(let moiChuCai of bangChuCai) console.log(moiChuCai)
for(let moiBuaAn in buaAn) console.log(buaAn[moiBuaAn])

const ten = "PhuongPham"
for(let kiTu of ten) console.log(kiTu.toUpperCase())