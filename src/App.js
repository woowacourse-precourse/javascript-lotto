const { Console } = require('@woowacourse/mission-utils');
const Lotto = require("./Lotto.js");
const Customer = require("./Customer.js");

class App {
  constructor() {
    this.Customer = new Customer();
    this.Lottos = [];
  }

  play() {
    this.getTotalMoneyInput();
  }

  getTotalMoneyInput() {
    Console.readLine("구입금액을 입력해 주세요.", (totalMoney) => {
      this.isValidMoney(totalMoney);
      this.creatLottos(totalMoney / 1000);
    })
  }

  isValidMoney(money) {
    if(isNaN(money) || !Number.isInteger(Number(money))) {
      throw new Error("[ERROR] 구입 금액은 정수형 입니다.");
    }
    if(money % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위 입니다.");
    }
  }

  creatLottos(lottoAmount) {
    for(let i=0; i<lottoAmount; i++) {
      this.Lottos.push(this.Customer.buyLotto());
    }
  }

}

console.log(Console.readLine);
let a = new App();
a.play();

module.exports = App;
