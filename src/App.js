const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
  }

  play() {
    Console.readLine('구입금액을 입력해 주세요.', (input) => {
      const amount = this.validateAmount(Number(input));
      const quantity = this.countLottoQuantity(amount);
      Console.print(`${quantity}개를 구매했습니다.`);
    });
  }

  validateAmount(amount){
    if (amount === 0 || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.");
    }
    return amount;
  }

  countLottoQuantity(amount){
  }


}

const app = new App();
app.play();

module.exports = App;
