class Check {
    constructor() {
        this.CHECKNUM = ''
        this.LOTTO_AMOUNT = 0
    }

    checkNumbers(number) {
        this.CHECKNUM = number.split("")
        for (let i = 0 ; i < this.CHECKNUM.length; i ++) {
            let CHANGE_INT = parseInt(this.CHECKNUM[i])
            if (Number.isInteger(CHANGE_INT) === false ){
                throw new Error("[ERROR] 숫자를 입력해주세요")
            }
        }
    }

    buyLotto(number) {
        this.LOTTO_AMOUNT = number
        return parseInt(this.LOTTO_AMOUNT / 1000)
    }
}

module.exports = Check;