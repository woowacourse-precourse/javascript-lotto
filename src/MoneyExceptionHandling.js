class MoneyExceptionHandling {
    constructor(money) {
        this.moneyCheck(money);
    }
    moneyCheck(money) {
        if (money % 1000 !== 0) {
            throw new Error("[ERROR] 금액이 1,000원 단위로 나누어 떨이지지 않습니다.");
        };
    }
}

module.exports = MoneyExceptionHandling;