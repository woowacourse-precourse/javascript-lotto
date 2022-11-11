const { MissionUtils, SYSTEM } = require('./System');
const { MESSAGE } = require('./Constants')
class Person {
    constructor() {
        this.lottos = null;
    }

    buy() {
        MissionUtils.Console.readLine(MESSAGE.ENTER_CASH, (cache) => {
            SYSTEM.isCorrectCache(cache);
            this.lottos = SYSTEM.publishLotto(cache);
            SYSTEM.getResult(this.lottos, cache);
        });
    }
}
module.exports = Person;