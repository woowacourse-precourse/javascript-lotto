const MissionUtils = require('@woowacourse/mission-utils');
const Cost = require('./Cost');
const Lotto = require('./Lotto');
const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.cost;
    this.lottoArray = [];
    this.winningLottoNumberArray = [];
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

  getWinningLottoNumberArray() {
    Console.readLine('당첨 번호를 입력해 주세요.', winningLottoNumberInput => {
      let winningLottoNumberInputArray = winningLottoNumberInput
        .split(',')
        .map(number => Number(number));
      this.winningLottoNumberArray = new Lotto(winningLottoNumberInputArray);
    });
  }

  play() {
    this.getCost();
    this.getLottoArray();
    this.getWinningLottoNumberArray();
  }
}

module.exports = App;
