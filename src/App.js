const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const Lotto = require('./Lotto');
const User = require('./User');

class App {
  winningNumber = [];
  UsersLottos = [];

  constructor() {
    this.Lotto = new Lotto();
    this.User = new User();
  }

  play() {
    this.getAmount();
  }

  getAmount() {
    Console.readLine('구입금액을 입력해 주세요.', answer => {
      if (this.User.isValidAmount(answer)) {
        const quantity = parseInt(+answer / 1000);
        this.issueLotto(quantity);
      }
    });
  }

  issueLotto(quantity) {
    Console.print(`${quantity}개를 구매했습니다.`);
    this.UsersLottos = this.Lotto.pickLottoNumber(quantity);
    this.printLottos();
  }

  printLottos() {
    this.UsersLottos.forEach(lotto => Console.print(lotto));
    this.inputWinNumber();
  }

  /*   getwinningNumber() {
    return this.#winningNumber;
  } */

  inputWinNumber() {
    Console.readLine('당첨 번호를 입력해 주세요.', answer => {
      const winNumbersArr = answer.split(',').map(Number);
      if (this.Lotto.validateLotto(winNumbersArr)) {
        this.winningNumber = winNumbersArr;
        this.inputBonusNumber();
      }
    });
  }

  inputBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.', answer => {
      if (this.Lotto.validateBonusNum(this.winningNumber, +answer)) {
        this.winningNumber.push(+answer);
        this.printResult();
      }
    });
  }

  printResult() {
    const result = this.Lotto.getResult(this.UsersLottos, this.winningNumber);
    Console.print(`당첨 통계\n---\n3개 일치 (5,000원) - ${result[0]}개\n4개 일치 (50,000원) - ${result[1]}개\n5개 일치 (1,500,000원) - ${result[2]}개\n5개 일치, 보너스 불 일치 (30,000,000원) - ${result[3]}개\n6개 일치 (2,000,000,000원) - ${result[4]}개
    `);
    this.printReturnRate(result);
  }

  printReturnRate(result) {
    const returnRate = this.User.calculateReturnRate(result);
    Console.print(`총 수익률은 ${returnRate}% 입니다.`);
  }
}

const app = new App();
app.play();

module.exports = App;
