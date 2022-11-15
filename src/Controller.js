const { Random } = require('@woowacourse/mission-utils');
const Display = require('./Display');
const View = require('./view');

class Controller {
    constructor() {
        this.lottos = [];
        this.display = new Display(this);
    }

    issueLotto(answer) {
        const quantity = answer / 1000;
        for (let count = 0; count < quantity; count += 1) {
            this.lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
        }

        this.view.printLottoList(this.lottos);
    }
}

module.exports = Controller;