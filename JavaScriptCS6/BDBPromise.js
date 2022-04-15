//XIN SO DT
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

xinSoDt().then(soDt => console.log(`Da xin duoc so thang Nam: ${soDt}`)).catch(error => console.log(error))