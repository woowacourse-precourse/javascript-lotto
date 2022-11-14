const MissionUtils = require("@woowacourse/mission-utils");

class Money {
    #money;
    #amountOfLotto;

    constructor() {
        this.#money = 0;
        this.#amountOfLotto = 0;
    }

    setMoney() {
        MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
          this.validateMoney(userInput);
          this.#money = Number(userInput);
        });
    }

    getMoney() {
        return this.#money;
    }

    setAmountOfLotto() {
        this.#amountOfLotto = this.#money / 1000;
    }

    getAmountOfLotto() {
        return this.#amountOfLotto;
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

module.exports = Money;