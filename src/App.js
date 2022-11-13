const MissionUtils = require('@woowacourse/mission-utils');
const Money = require('./Money');

class App {
  #Money;

  constructor() {
    this.money = 0;
  }

  play() {
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.readLine('구입금액을 입력해주세요.', (money) => {
      this.#Money = new Money(money);
      this.money = money;
      this.checkQuantity(money);
    });
  }

  checkQuantity(money) {
    const quantity = money / 1000;
    MissionUtils.Console.print(`${quantity}개를 구매했습니다.`);
    this.createLotto(quantity);
  }

  createLotto(quantity) {
    for (let i = 0; i < quantity; i += 1) {
      const lottoNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.checkSort(lottoNum);
    }
  }

  checkSort(lottoNum) {
    const tempArr = [];
    const sortedNum = lottoNum.sort((a, b) => a - b);
    tempArr.push(sortedNum);
    for (let i = 0; i < tempArr.length; i += 6) {
      this.lottoArr.push(tempArr.slice(i, i + 6));
    }
  }
}

module.exports = App;
