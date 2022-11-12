class Purchase {
    #amount;

    constructor(amount) {
        this.validate(amount);
        this.#amount = amount;
    }

    validate(amount) {
        if (amount === 0 || amount % 1000 !== 0) {
        throw new Error("[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.");
        }
    }

    // TODO: 추가 기능 구현
    }

module.exports = Purchase;
