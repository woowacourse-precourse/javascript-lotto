const { MissionUtils, SYSTEM } = require('./System');
const { MESSAGE, ERROR, LOTTO_PRICE } = require('./Constants')
class Person {
    constructor() {
        this.lottos = null;
    }

    isCorrectCash(cash) {
        if (isNaN(cash))
            throw new Error(ERROR.CASH_IS_NOT_NUMBER);

        if (cash <= 0)
            throw new Error(ERROR.CASH_IS_NOT_NATURAL_NUMBER);

        if (cash % LOTTO_PRICE)
            throw new Error(ERROR.INVAID_CASH);
    }

    buy() {
        MissionUtils.Console.readLine(MESSAGE.ENTER_CASH, (cash) => {
            SYSTEM.print(MESSAGE.NEW_LINE);
            this.isCorrectCash(cash);
            this.lottos = SYSTEM.publishLotto(cash);
            SYSTEM.getResult(this.lottos, cash);
        });
    }
}
module.exports = Person;