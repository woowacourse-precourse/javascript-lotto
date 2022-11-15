const ONE_LOTTO_COST = 1000;
const ERROR_MONEY_IS_NUMBER_MESSAGE = "[ERROR] 숫자를 입력해주세요.";
const ERROR_MONEY_IS_INT_MESSAGE = "[ERROR] 실수가 아닌 금액을 입력해주세요.";
const ERROR_MONEY_OVER_MESSAGE = "[ERROR] 천원 이상의 금액을 입력해주세요.";
const ERROR_MONEY_DIVIDE_MESSAGE = "[ERROR] 천원 단위의 금액으로 입력해주세요.";

class Money {
  #money;
  #numOfLotto;

  constructor(money) {
    this.validateMoney(money);
    this.#money = money;
    this.setNumOfLotto(money);
  }

  getMoney() {
    return this.#money;
  }

  getNumOfLotto() {
    return this.#numOfLotto;
  }

  setNumOfLotto(money) {
    this.#numOfLotto = (money / ONE_LOTTO_COST);
  }

  validateMoney(money) {
    if(isNaN(money) || money === "" || money === " "){
      throw new Error(ERROR_MONEY_IS_NUMBER_MESSAGE);
    }
    if(Number(money) % 1 !== 0){
      throw new Error(ERROR_MONEY_IS_INT_MESSAGE);
    }
    if(Number(money) < ONE_LOTTO_COST){
         throw new Error(ERROR_MONEY_OVER_MESSAGE);
    }
    if(Number(money) % ONE_LOTTO_COST !== 0){
      throw new Error(ERROR_MONEY_DIVIDE_MESSAGE);
    }
  }
}

module.exports = Money;