//CACH SU DUNG HAM GOI LAI
/*const xinSoDT = (callback) =>{
    let soDt
    console.log('Goi dien cho thang ban: Cho tao xin so thang Nam')
    console.log('Thang ban dang tim so thang Nam')
    setTimeout(() => {
        soDt = 123456
        console.log('Day roi da tim duoc so thang Nam')
        callback(soDt)
    }, 1000);

}
const sauKhiNhanDuocSoDt = soDtDaNhan => console.log(`Day la so thang NAm: ${soDtDaNhan}`)
xinSoDT(sauKhiNhanDuocSoDt)
*/
//VAN DE VOI QUA NHIEU HAM GOI LAI

const xinSoDT = (callbackAfterFindSDT) =>{
    let soDt
    console.log('Goi dien cho thang ban: Cho tao xin so thang Nam')
    console.log('Thang ban dang tim so thang Nam')
    setTimeout(() => {
        soDt = 123456
        console.log('Day roi da tim duoc so thang Nam')
        callbackAfterFindSDT(soDt, goiChoNam)
    }, 1000);

}
const sacPin = (soDt, hamGoiLaiSauKhiSacPin) => {
    console.log('Doi ti, sac pin da')

    setTimeout(() => {
        console.log('Sac pin xong, bat dau goi cho Nam')
        hamGoiLaiSauKhiSacPin(soDt)
    }, 2000); 
}
const goiChoNam = (soDt) => console.log('Dang noi chuyen voi Nam khi goi vao so ' + soDt)

//TIEN HANH TOAN BO QUA TRINH
xinSoDT(sacPin)