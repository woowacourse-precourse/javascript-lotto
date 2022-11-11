const MissionUtils = require('@woowacourse/mission-utils');
const userInput = require('./Input');
const Lotto = require('./Lotto');
const Output = require('./Output');

class App {
  lottoCount;
  lottoArray = [];
  winningNumbers;
  bonusNumber;

  constructor() {
    this.print = new Output();
  }

  play() {
    userInput.call(this, this.getLottos, this.getWinningNumbers, () => {}, () => {})
  }

  getLottos(money) {
    this.validMoney(money);
    this.lottoCount = money / 1000;
    this.print.printUserLottoCount(this.lottoCount);

    for (let i = 0; i < this.lottoCount; i++) {
      const randomLotto = this.getRandomLottoNumber();
      this.lottoArray.push(new Lotto(randomLotto));

      this.print.printUserLottoNumber(randomLotto);
    }
  }

  validMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위 입니다.');
    }
  }

  getRandomLottoNumber() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers.sort((a, b) => a - b);
  }

  getWinningNumbers(numbers) {
    this.validWinningNumbers(numbers);
    this.winningNumbers = this.winningNumbersConverter(numbers);
  }

  winningNumbersConverter(numbers) {
    const winningNumberArray = numbers.split(',').map((item) => parseInt(item));
    return winningNumberArray;
  }
  
  validWinningNumbers(numbers) {
    const reg = /^([0-9]+,){5}([0-9]+){1}$/;
    if (!reg.test(numbers)) {
      throw new Error('[ERROR] 당첨 숫자 입력의 형식이 잘못되었습니다.');
    }
  }
}

const app = new App();
app.play()

module.exports = App;
