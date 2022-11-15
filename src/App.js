const { Console } = require('@woowacourse/mission-utils');
const ValidatePay = require('./ValidatePay');
const ValidateWinnigNumber = require('./ValidateWinningNumber');
const Lotto = require('./Lotto');
const ValidateBonusNumber = require('./ValidateBonusNumber');
const CalculateResult = require('./CalculateResult');
const makeLotto = require('./makeLotto');

class App {

  play() {
    this.buyLottoArray = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
    this.statisticArray = [];
    this.inputPay();
  };

  inputPay() {
    Console.readLine(`구입금액을 입력해 주세요.\n`, answer => {
      const validatePay = new ValidatePay(answer);
      this.buyLotto(validatePay.count());
    });
  };

  buyLotto(count) {
    Console.print(`\n${count}개를 구매했습니다.`);

    for (let i = 0; i < count; i++) {
      const buyLottoElement = makeLotto();
      this.buyLottoArray.push(buyLottoElement);
      Console.print(buyLottoElement);
    }

    this.inputWinningNumber();
  };

  inputWinningNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', answer => {
      const validateWinningNumber = new ValidateWinnigNumber(answer);
      new Lotto(validateWinningNumber.winningNumber);
      this.winningNumber = validateWinningNumber.winningNumber
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', answer => {
      new ValidateBonusNumber(answer, this.winningNumber);
      this.bonusNumber = Number(answer);
      this.statistic();
    })
  }

  statistic() {
    const statisticArray = new CalculateResult(this.winningNumber, this.bonusNumber, this.buyLottoArray).result;
    this.statisticArray = statisticArray;
    this.printResult();
  }

  printResult() {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${this.statisticArray[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.statisticArray[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.statisticArray[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.statisticArray[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.statisticArray[4]}개`);
    Console.close();
  };
}

const app = new App();
app.play();

module.exports = App;
