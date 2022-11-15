const { Console } = require('@woowacourse/mission-utils');

class App {

  purchasemoney;
  
  play() {
    this.purchaseLotto();

  }

  purchaseLotto() {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      this.purchasemoney = money;
      this.validatePrice();
    });
  }

  validatePrice() {
    if (this.purchasemoney % 1000 !== 0) throw new Error("[ERROR] 1000단위의 수를 입력해주세요!");
  }

}

module.exports = App;
