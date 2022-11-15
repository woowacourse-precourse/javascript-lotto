const MissionUtils = require("@woowacourse/mission-utils");
const {INPUT_MESSAGE} = require("../constant/constants")
const Lotto = require("./Lotto")
const GetLotto = require("./GetLotto")

class App {

  constructor() {
    this.GetLotto = new GetLotto();
    this.countOfLottos;
    this.lottoList;
    this.winningLotto;
    this.winningLottoNumbers;
    this.winningLottoBonusNum

  }

  play() {
    this.inputUserMoney();
  }

  inputUserMoney() {
    Console.readLine(INPUT_MESSAGE.PURCHASE_MESSAGE, (userMoney) => {
      this.countOfLottos = this.GetLotto.countLottos(userMoney);
      this.lottoList = this.GetLotto.makeLottoList(userMoney);

      this.printLottos();
    });
  }

  printLottos() {
    Console.print(`\n${this.countOfLottos}개를 구매했습니다.`);
    this.lottoList.forEach((lotto) => lotto.printNumbers());

    this.inputUserNumbers();
  }

  inputUserNumbers() {
    Console.readLine(INPUT_MESSAGE.LOTTO_NUMBER, (userInput) => {
      const userInputNumbers = userInput.split(',').map((str) => Number(str));
      this.winningLotto = new WinningLotto(userInputNumbers);
      this.winningLottoNumbers = userInputNumbers;

      this.inputUserBonusNumber();
    });
  }

  inputUserBonusNumber() {
    Console.readLine(INPUT_MESSAGE.BONUS_NUMBER, (userInput) => {
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
}

module.exports = App;
