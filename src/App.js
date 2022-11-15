const MissionUtils = require('@woowacourse/mission-utils');
const Cost = require('./Cost');
const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.cost;
    this.lottoArray = [];
  }

  getCost() {
    Console.readLine('구입금액을 입력해 주세요.', userInputCost => {
      this.cost = new Cost(userInputCost);
    });
  }

  getLottoArray() {
    let lottoQuantity = this.cost.getValue() / 1000;
    Console.print(`${lottoQuantity}개를 구매했습니다.`);

    for (let i = 0; i < lottoQuantity; i++) {
      let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.sort(function (one, two) {
        return one - two;
      });
      Console.print(lotto);
      this.lottoArray.push(lotto);
    }
  }

  play() {
    this.getCost();
    this.getLottoArray();
  }
}

module.exports = App;
