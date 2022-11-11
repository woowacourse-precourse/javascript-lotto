class Exception {
    constructor(money, type) {
        this.money = money;
        this.type = type;
    }

    checkInputException() {
        if (this.type === 'unit') {
            return this.isThousand(this.money);
        }
    }

    isThousand(money) {
        if (+money / 1000 !== Math.floor(+money / 1000))
            throw new Error('[ERROR] 천원 단위의 숫자를 입력해주세요.');

        return true;
    }
}

module.exports = Exception;
