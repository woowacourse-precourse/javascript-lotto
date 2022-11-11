const { MissionUtils, SYSTEM } = require('./System');
const { MESSAGE } = require('./Constants')
class Person {
    constructor() {
        this.lottos = null;
    }

    buy() {
        MissionUtils.Console.readLine(MESSAGE.ENTER_CASH, (cash) => {
            SYSTEM.isCorrectCash(cash);
            this.lottos = SYSTEM.publishLotto(cash);
            SYSTEM.getResult(this.lottos, cash);
        });
    }
}
module.exports = Person;