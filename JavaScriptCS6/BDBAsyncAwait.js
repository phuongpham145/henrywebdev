const xinSoDt = () => {
    console.log('Goi dien cho thang Nam. Cho tao xin xo thang Nam.')
    console.log('Dang tim ...')
    const thaoTacTimKiem = new Promise((resolve, reject) => {
        let daTimThay

        setTimeout(() => {
            daTimThay = true
            if(daTimThay) {
                soDt = 123456
                console.log(`Day roi so cua no la ${soDt}`)
                resolve(soDt)
            } else {
                reject('Tao khong co so thang Nam')
            }
        }, 1000);
    })
    return thaoTacTimKiem
}

//SAC PIN
const sacPin = () => {
    console.log('Doi ti sac pin da')
    let chayPin

    const thaoTacSacPin = new Promise((resolve, reject) => {
        setTimeout(() => {
            chayPin = false
            if(!chayPin){
                console.log('Sac pin day. Bat dau goi cho Nam')
                resolve()
            } else {
                reject('Chay pin roi khong goi duoc')
            }
        }, 1500);
    })
    return thaoTacSacPin
}

const goiChoNam = (soDt) => console.log(`Dang noi chuyen voi Nam tai so ${soDt}`)
//HANH DONG
const hanhDong = async () => {
    try {
        const soDt = await xinSoDt()
        try {
            await sacPin()
            goiChoNam(soDt)
        } catch (error) {
            console.log(error)
        }
        goiChoNam(soDt)
    } catch (error) {
        console.log(error)
    }
}

hanhDong()