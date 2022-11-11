const { Console } = require('@woowacourse/mission-utils');
const GameTools = require('./GameTools');
const Lotto = require('./Lotto');
const Render = require('./Render');
const Validator = require('./Validator');

class App {
  constructor() {
    this.lottoCount = 0;
    this.winningNumbers = [];
    this.userLottoList = [];
    this.bonusNumber = 0;
    this.prizeResult = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  play() {
    // 비즈니스 로직
    Console.print('구입금액을 입력해 주세요.');
    Console.readLine('', (money) => {
      Validator.throwErrorIfInValidMoney(money);
      this.lottoCount = money / 1000;
      this.buyLotto();
    });
  }

  buyLotto() {
    this.userLottoList = GameTools.issueLottoAsManyAsCount(this.lottoCount);
    this.renderIssuedLottoList();
  }

  renderIssuedLottoList() {
    Render.issuedLottoList(this.lottoCount, this.userLottoList);
    this.getWinningNumbers();
  }

  getWinningNumbers() {
    // 비즈니스 로직
    Console.print('당첨 번호를 입력해 주세요.');
    Console.readLine('', (inputValue) => {
      Validator.throwErrorIfInValidFormOfWinningNumber(inputValue);
      const winningNumbers = inputValue.split(',').map((num) => Number(num));
      this.winningNumbers = winningNumbers;
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    // 비즈니스 로직
    Console.print('보너스 번호를 입력해 주세요.');
    Console.readLine('', (bonusNumber) => {
      Validator.throwErrorIfInValidBonusNumber(
        this.winningNumbers,
        bonusNumber
      );
      this.bonusNumber = Number(bonusNumber);
      this.setPrizeResult();
    });
  }

  setPrizeResult() {
    // 비즈니스 로직
    this.prizeResult = this.userLottoList.reduce((acc, cur) => {
      const sameNumberCount = this.getSameNumberCount(cur);
      const isBonusNumberMatch = cur.includes(Number(this.bonusNumber));
      if (sameNumberCount === 6) acc.first += 1;
      if (sameNumberCount === 5 && isBonusNumberMatch) acc.second += 1;
      if (sameNumberCount === 5 && !isBonusNumberMatch) acc.third += 1;
      if (sameNumberCount === 4) acc.fourth += 1;
      if (sameNumberCount === 3) acc.fifth += 1;

      return acc;
    }, this.prizeResult);
    this.printResult();
  }

  getSameNumberCount(lottoNumber) {
    return lottoNumber.filter((number) => this.winningNumbers.includes(number))
      .length;
  }

  printResult() {
    // 비즈니스 로직
    Console.print(`3개 일치 (5,000원) - ${this.prizeResult.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${this.prizeResult.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.prizeResult.third}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.prizeResult.second}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.prizeResult.first}개`);
    this.getTotalEarningRate();
  }

  getTotalEarningRate() {
    const totalMoney =
      this.prizeResult.first * 200000000 +
      this.prizeResult.second * 30000000 +
      this.prizeResult.third * 1500000 +
      this.prizeResult.fourth * 50000 +
      this.prizeResult.fifth * 5000;
    const earningRate = ((totalMoney / (this.lottoCount * 1000)) * 100).toFixed(
      1
    );
    this.printEarningRate(earningRate);
  }

  printEarningRate(earningRate) {
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
