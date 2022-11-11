const { MissionUtils, SYSTEM } = require('./System');
const { MESSAGE } = require('./Constants')
class Person {
    constructor() {
        this.lotto = [];
    }
    buy() {
        MissionUtils.Console.readLine(MESSAGE.ENTER_CASH, (cache) => {
            SYSTEM.isCorrectCache(cache);
        });
    }
}
module.exports = Person;