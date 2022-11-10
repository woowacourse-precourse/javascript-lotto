class LottoMachine {
  #money;

  constructor(money){
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    if(!!Number(money)) {
      throw new Error("[ERROR] 금액은 숫자만 입력해야 합니다.");
    }
    if(Number(money) % 1000 !== 0 ){
      throw new Error("[ERROR] 금액은 1,000원 단위만 입력 가능합니다.")
    }
  }
  
}

module.exports = LottoMachine;