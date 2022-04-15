const computedPropertyName = 'buaToi'

const buaAn = {
    buaSang: 'xoi',
    buaTrua: 'pho',
    [computedPropertyName]: 'bun'
}
console.log(buaAn)

const buaAnKhac = {
    buaSang: 'xoi',
    buaTrua: 'pho',
    [computedPropertyName + 'Homnay']: 'bun'
}
console.log(buaAnKhac)

const ten = 'Ten'
const Ngoi = {
    quocTich: "Vietnam",
    [`hoVa${ten}`]: 'Pham'
}
console.log(Ngoi)
const nguoiKhac = {
    ...Ngoi,
    hoVaTen: 'Phuong',
    tuoi : 23
}
console.log(nguoiKhac)
