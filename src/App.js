const WinningLotto = require('./WinningLotto');
const LottoMachine = require('./LottoMachine');
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.countOfLottos;
    this.lottoList;
    this.winningLotto;
    this.winningLottoNumbers;
    this.winningLottoBonusNumber;
    this.result = {
      three: 0,
      four: 0,
      five: 0,
      fiveBonus: 0,
      six: 0,
    };
    this.profit;
  }

  play() {
    this.inputUserMoney();
  }

  inputUserMoney() {
    Console.readLine(MESSAGE.ENTER_USER_MONEY, (userMoney) => {
      this.countOfLottos = this.lottoMachine.countLottos(userMoney);
      this.lottoList = this.lottoMachine.makeLottoList(userMoney);

      this.printLottos();
    });
  }

  printLottos() {
    Console.print(`\n${this.countOfLottos}개를 구매했습니다.`);
    this.lottoList.forEach((lotto) => lotto.printNumbers());

    this.inputUserNumbers();
  }

  inputUserNumbers() {
    Console.readLine(MESSAGE.ENTER_USER_NUMBER, (userInput) => {
      const userInputNumbers = userInput.split(',').map((str) => Number(str));
      this.winningLotto = new WinningLotto(userInputNumbers);
      this.winningLottoNumbers = userInputNumbers;

      this.inputUserBonusNumber();
    });
  }

  inputUserBonusNumber() {
    Console.readLine(MESSAGE.ENTER_USER_BONUS_NUMBER, (userInput) => {
      const userInputNumber = Number(userInput);
      if (this.winningLotto.isValidBonusNumber(userInputNumber)) {
        this.winningLottoBonusNumber = userInputNumber;
      }

      this.printResult();
    });
  }

  printResult() {
    this.calculateProfit();
    const profitRate = ((this.profit / this.countOfLottos) * 100).toFixed(1);

    Console.print(
      '\n당첨 통계' +
        '\n---\n' +
        `3개 일치 (5,000원) - ${this.result.three}개\n` +
        `4개 일치 (50,000원) - ${this.result.four}개\n` +
        `5개 일치 (1,500,000원) - ${this.result.five}개\n` +
        `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result.fiveBonus}개\n` +
        `6개 일치 (2,000,000,000원) - ${this.result.six}개\n` +
        `총 수익률은 ${profitRate}%입니다.`
    );
    Console.close();
  }

  calculateProfit() {
    const [threeProfit, fourProfit, fiveProfit, fiveBonusProfit, sixProfit] = [
      5, 50, 1500, 30000, 2000000,
    ];

    this.countPrize();
    this.profit =
      threeProfit * this.result.three +
      fourProfit * this.result.four +
      fiveProfit * this.result.five +
      fiveBonusProfit * this.result.fiveBonus +
      sixProfit * this.result.six;
  }

  countPrize() {
    this.lottoList.forEach((lotto) => {
      const lottoPrize = lotto.decidePrize(
        this.winningLottoNumbers,
        this.winningLottoBonusNumber
      );
      this.result[lottoPrize] += 1;
    });
  }
}

module.exports = App;
