const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const Bonus = require('./Bonus');
const Cost = require('./Cost');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.cost;
    this.lottoArray = [];
    this.winningLottoNumberArray = [];
    this.bonusNumber;
    this.lottoResult = [0, 0, 0, 0, 0, 0];
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

  getBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.', bonumNumberInput => {
      this.bonusNumber = new Bonus(
        bonumNumberInput,
        this.winningLottoNumberArray.getValue()
      );
    });
  }

  getLottoResult() {
    let winningLottoArray = this.winningLottoNumberArray.getValue();
    for (i = 0; i < this.lottoArray.length; i++) {
      let count = 0;
      let bonusBoolean = false;
      this.lottoArray[i].filter(number => {
        if (winningLottoArray.includes(number)) count++;
        if (number === this.bonusNumber.getValue()) bonusBoolean = true;
      });
    }
    if (count === 3) this.lottoResult[1]++;
    if (count === 4) this.lottoResult[2]++;
    if (count === 5 && !bonusBoolean) this.lottoResult[3]++;
    if (count === 5 && bonusBoolean) this.lottoResult[4]++;
    if (count === 6) this.lottoResult[5]++;
  }

  play() {
    this.getCost();
    this.getLottoArray();
    this.getWinningLottoNumberArray();
    this.getBonusNumber();
    this.getLottoResult();
  }
}

module.exports = App;
