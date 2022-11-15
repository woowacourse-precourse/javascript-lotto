const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const LottoMachine = require('./LottoMachine');
const { lottoQuantity } = require('./utils');
const { validateInputMoney, validateInputBonusNum } = require('./validator');

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.userLottoNumbers;
    this.userMoney;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      validateInputMoney(money);
      this.userMoney = money;
      this.userLottoNumbers = lottoQuantity(money);
      this.inputWinningNum();
    });
  }

  inputWinningNum() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (number) => {
      const winningNumbers = number
        .split(',')
        .map((winningNumber) => Number(winningNumber));
      new Lotto(winningNumbers);
      this.inputBonusNum(winningNumbers);
    });
  }

  inputBonusNum(winningNumbers) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNum) => {
      validateInputBonusNum(winningNumbers, bonusNum);
      const rank = this.lottoMachine.compareInputWinNum(
        this.userLottoNumbers,
        winningNumbers,
        Number(bonusNum)
      );
      this.showWinResult(rank);
    });
  }

  showWinResult(equalScore) {
    Console.print('\n당첨 통계\n---');
    Console.print('3개 일치 (5,000원) - ' + equalScore[4] + '개');
    Console.print('4개 일치 (50,000원) - ' + equalScore[3] + '개');
    Console.print('5개 일치 (1,500,000원) - ' + equalScore[2] + '개');
    Console.print(
      '5개 일치, 보너스 볼 일치 (30,000,000원) - ' + equalScore[1] + '개'
    );
    Console.print('6개 일치 (2,000,000,000원) - ' + equalScore[0] + '개');
    this.calculateYield(equalScore);
  }

  calculateYield(equalScore) {
    const prizeMoney = [2000000000, 30000000, 1500000, 50000, 5000];

    let sumPrizeMoney = 0;
    for (let i = 0; i < prizeMoney.length; i++) {
      const result = prizeMoney[i] * equalScore[i];
      sumPrizeMoney += result;
    }
    const lottoYield = (sumPrizeMoney / this.userMoney) * 100;
    Console.print(`총 수익률은 ${lottoYield.toFixed(1)}%입니다.`);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
