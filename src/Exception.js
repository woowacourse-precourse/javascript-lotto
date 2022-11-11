class Exception {
    constructor(money, type) {
        this.money = money;
        this.type = type;
    }
    checkInputException() {
        if (this.type === 'unit') {
            this.isThousand(this.money);
        }
    }

    isThousand(money) {
        while (money < 10) {
            +money / 10;
        }

        if (+money !== 0)
            throw new Error('[ERROR] 천원 단위의 숫자를 입력해주세요.');

        return true;
    }
}

module.exports = Exception;
