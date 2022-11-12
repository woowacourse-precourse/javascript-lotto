const { Console } = require("@woowacourse/mission-utils");
const Utils = require("./Utils");
const BuyLotto = require("./BuyLotto");
const Lotto = require("./Lotto");
const InputMoney = require("./InputMoney");

class App {
  #regExp

  constructor() {
    this.utils = new Utils();
    this.#regExp = / /g;
    this.lotto;
    this.buyLotto;
    this.winningNumbers;
    this.bonusNumber;
    this.numbersOfLotto;
    this.lottoInfo = {
      rank5: 0,
      rank4: 0,
      rank3: 0,
      rank2: 0,
      rank1: 0,
      numberOfCorrectNumbers: 0,
      bonusNumber: 0
    };
  }

  play() {
    Console.readLine("구입금액을 입력해주세요.\n", (inputMoney) => {
      new InputMoney(inputMoney);
      this.buyLottos(inputMoney);
    });
  }

  buyLottos(inputMoney) {
    this.buyLotto = new BuyLotto(inputMoney / 1000);
    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (inputWinningNumbers) => {
      this.winningNumbers = inputWinningNumbers.replace(this.#regExp, '').split(',');
      this.lotto = new Lotto(this.winningNumbers);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      this.bonusNumber = bonusNumber;
      this.lotto.validateBonusNumber(this.winningNumbers, this.bonusNumber);
      this.getWinningStat();
      Console.close();
    });
  }

  getWinningStat() {
    Console.print("\n당첨 통계\n---")
    this.lottoInfo.lottos = this.buyLotto.getLottoArray();
    this.lottosWinningBonus();
  }

  lottosWinningBonus() {
    console.log(this.lottoInfo['lottos'][0].length);
    for (let i = 0; i < this.lottoInfo['lottos'].length; i++) {
      this.lottoInfo.numberOfCorrectNumbers = 0;
      this.lottoInfo.bonusNumber = 0;
      for (let j = 0; j < this.winningNumbers.length; j++) {
        if (this.lottoInfo['lottos'][i].includes(this.winningNumbers[j])) {
          this.lottoInfo.numberOfCorrectNumbers += 1;
        }
        if (this.lottoInfo.numberOfCorrectNumbers === 5 && this.lottoInfo['lottos'][i].includes(this.bonusNumber)) {
          this.lottoInfo.bonusNumber += 1;
        }
      }
      this.countWinning();
    }
    this.printWinningHistory();
  }

  countWinning() {
    if (this.lottoInfo.numberOfCorrectNumbers === 3) {
      this.lottoInfo['rank5'] += 1;
    }
    else if (this.lottoInfo.numberOfCorrectNumbers === 4) {
      this.lottoInfo['rank4'] += 1;
    }
    else if (this.lottoInfo.numberOfCorrectNumbers === 5 && this.lottoInfo.bonusNumber === 1) {
      this.lottoInfo['rank2'] += 1;
    }
    else if (this.lottoInfo.numberOfCorrectNumbers === 5) {
      this.lottoInfo['rank3'] += 1;
    }
    else if (this.lottoInfo.numberOfCorrectNumbers === 6) {
      this.lottoInfo['rank1'] += 1;
    }
  }

  printWinningHistory() {
    Console.print(`3개 일치 (5,000원) - ${this.lottoInfo['rank5']}개`);
    Console.print(`4개 일치 (50,000원) - ${this.lottoInfo['rank4']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.lottoInfo['rank3']}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.lottoInfo['rank2']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.lottoInfo['rank1']}개`);

    this.printRate();
  }

  printRate() {
    const profit =
      this.lottoInfo['rank5'] * 5000 +
      this.lottoInfo['rank4'] * 50000 +
      this.lottoInfo['rank3'] * 1500000 +
      this.lottoInfo['rank2'] * 30000000 +
      this.lottoInfo['rank1'] * 2000000000;
    const rate = ((profit / (this.lottoInfo['lottos'].length * 1000)) * 100).toFixed(1);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

module.exports = App;

const app = new App();
app.play();