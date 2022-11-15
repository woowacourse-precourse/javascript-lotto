const ONE_LOTTO_COST = 1000;

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