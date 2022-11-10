const { Random } = require('@woowacourse/mission-utils');
const View = require('./view');

class Controller {
  constructor() {
    this.lottos = [];
    this.view = new View(this);
  }

  generateLotto(answer) {
    const quantity = answer / 1000;
    for (let count = 0; count < quantity; count += 1) {
      this.lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }

    this.view.printLottos(this.lottos);
  }
}

module.exports = Controller;
