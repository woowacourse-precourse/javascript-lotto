const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {
    this.LOTTO_TICKET_PRICE = 1000;
    this.money = 0;
    this.lottoCount = 0;
    this.lottoNumber = [];
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
  }
}

const app = new App();
app.play();

module.exports = App;
