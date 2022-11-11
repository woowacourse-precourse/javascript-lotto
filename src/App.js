const { Console } = require('@woowacourse/mission-utils');
const GameTools = require('./GameTools');
const Lotto = require('./Lotto');
const Render = require('./Render');
const Validator = require('./Validator');

class App {
  constructor() {
    this.lotto;
    this.lottoCount;
    this.userLottoList;
    this.bonusNumber;
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
      this.lotto = new Lotto(winningNumbers);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    // 비즈니스 로직
    Console.print('보너스 번호를 입력해 주세요.');
    Console.readLine('', (bonusNumber) => {
      Validator.throwErrorIfInValidBonusNumber(
        this.lotto.winningNumbers,
        bonusNumber
      );
      this.bonusNumber = Number(bonusNumber);
      this.setPrizeResult();
    });
  }

  setPrizeResult() {
    this.prizeResult = this.lotto.prizeResult(
      this.userLottoList,
      this.bonusNumber,
      this.prizeResult
    );
    this.printResult();
  }

  printResult() {
    Render.winningResult(this.prizeResult);
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
