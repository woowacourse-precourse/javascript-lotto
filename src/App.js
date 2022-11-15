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
    this.rateOfResult;
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
      this.getLottoPrint(lotto);
      this.lottoArray.push(lotto);
    }
  }

  getLottoPrint(lotto) {
    let lottoPrint = '[';
    for (let i = 0; i < lotto.length; i++) {
      if (i !== lotto.length - 1) lottoPrint += `${lotto[i]}, `;
      else lottoPrint += `${lotto[i]}]`;
    }
    Console.print(lottoPrint);
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
    for (let i = 0; i < this.lottoArray.length; i++) {
      let count = 0;
      let bonusBoolean = false;
      this.lottoArray[i].filter(number => {
        if (winningLottoArray.includes(number)) count++;
        if (number === this.bonusNumber.getValue()) bonusBoolean = true;
      });
      if (count === 3) this.lottoResult[1]++;
      if (count === 4) this.lottoResult[2]++;
      if (count === 5 && !bonusBoolean) this.lottoResult[3]++;
      if (count === 5 && bonusBoolean) this.lottoResult[4]++;
      if (count === 6) this.lottoResult[5]++;
    }
  }

  getRateOfReturn() {
    let benefit = 0;
    for (let i = 0; i < this.lottoResult.length; i++) {
      if (this.lottoResult[i] !== 0) {
        if (i === 1) benefit += 5000 * this.lottoResult[i];
        if (i === 2) benefit += 50000 * this.lottoResult[i];
        if (i === 3) benefit += 1500000 * this.lottoResult[i];
        if (i === 4) benefit += 30000000 * this.lottoResult[i];
        if (i === 5) benefit += 2000000000 * this.lottoResult[i];
      }
    }
    this.rateOfResult = ((benefit / this.cost.getValue()) * 100).toFixed(1);
  }

  resultPrint() {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${this.lottoResult[1]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.lottoResult[2]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.lottoResult[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.lottoResult[4]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.lottoResult[5]}개`);
    Console.print(`총 수익률은 ${this.rateOfResult}%입니다.`);
  }

  endLottoGame() {
    Console.close();
  }

  play() {
    this.getCost();
    this.getLottoArray();
    this.getWinningLottoNumberArray();
    this.getBonusNumber();
    this.getLottoResult();
    this.getRateOfReturn();
    this.resultPrint();
    this.endLottoGame();
  }
}

module.exports = App;
