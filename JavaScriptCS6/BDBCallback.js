//van de
/*const xinSoDT = () =>{
    let soDt
    console.log('Goi dien cho thang ban: Cho tao xin so thang Nam')
    console.log('Thang ban dang tim so thang Nam')
    setTimeout(() => {
        soDt = 123456
        console.log('Day roi da tim duoc so thang Nam')
    }, 1000);
    return soDt
}

const soDtDaXin = xinSoDT()

console.log(soDtDaXin)*/

//Cach giai quyet sai

const xinSoDT = () =>{
    let soDt
    console.log('Goi dien cho thang ban: Cho tao xin so thang Nam')
    console.log('Thang ban dang tim so thang Nam')
    setTimeout(() => {
        soDt = 123456
        console.log('Day roi da tim duoc so thang Nam')
    }, 1000);

    //console.log(soDt)
    //sua xua
    setTimeout(() => {
        console.log(soDt)
    }, 1500);
}
xinSoDT()