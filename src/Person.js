const { MissionUtils, SYSTEM } = require('./System');
const { MESSAGE } = require('./Constants')
class Person {
    constructor() {
        this.lotto = null;
    }

    buy() {
        MissionUtils.Console.readLine(MESSAGE.ENTER_CASH, (cache) => {
            SYSTEM.isCorrectCache(cache);
            this.lotto = SYSTEM.publishLotto(cache);
            SYSTEM.getResult(this.lotto);
        });
    }
}
module.exports = Person;