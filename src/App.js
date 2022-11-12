const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {
    this.LOTTO_TICKET_PRICE = 1000;
    this.money = 0;
    this.lottoCount = 0;
    this.lottoNumber = [];
    this.winNumber = [];
  }
  play() {
    this.injectMoney();
  }

  injectMoney() {
    Console.readLine(`구입금액을 입력해 주세요.\n`, money => {
      if (money % 1000 !== 0) {
        throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
      }
      this.lottoCount += Number(money) / this.LOTTO_TICKET_PRICE;
      this.money += Number(money);
      this.makeRandomLottoNumber();
    });
  }

  makeRandomLottoNumber() {
    for (let i = 0; i < this.lottoCount; i++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      const updateNumber = [...this.lottoNumber];
      updateNumber.push(lottoNumber.sort((a, b) => a - b));
      this.lottoNumber = updateNumber;
    }
    this.printLotto();
  }

  printLotto() {
    const lottoList = this.lottoNumber
      .map((x, index) => '[' + this.lottoNumber[index].join(', ') + ']')
      .join('\n');
    Console.print(`\n${this.lottoCount}개를 구매했습니다.\n${lottoList}`);
    this.enterWinNumber();
  }

  enterWinNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', input => {
      const inputNumber = input.split(',').map(num => Number(num));
      const lotto = new Lotto(inputNumber);
      lotto.validate(inputNumber);
      this.winNumber = inputNumber;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
