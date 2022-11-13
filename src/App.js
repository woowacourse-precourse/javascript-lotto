const MissionUtils = require("@woowacourse/mission-utils");


class App {
  #money;

  constructor() {
    let amountOfLotto = 0;
    let userLotto = [];
  }

  play() {
    this.getMoney();
    this.getAmountOfLotto();
    this.buyLotto();
  }

  getMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
      this.validateMoney(userInput);
      this.#money = Number(userInput);
    });
  }

  getAmountOfLotto(){
    this.amountOfLotto = this.#money / 1000;
  }

  buyLotto(){
    for(let i = 0; i < this.amountOfLotto; i++){
      this.userLotto.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }
  }

  validateMoney(money) {
    if(isNaN(money) || money === "" || money === " "){
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if(Number(money) % 1 !== 0){
      throw new Error("[ERROR] 실수가 아닌 금액을 입력해주세요.")
    }
    if(Number(money) < 1000){
      throw new Error("[ERROR] 천원 이상의 금액을 입력해주세요.");
    }
    if(Number(money) % 1000 !== 0){
      throw new Error("[ERROR] 천원 단위의 금액으로 입력해주세요.");
    }
  }
}

module.exports = App;
