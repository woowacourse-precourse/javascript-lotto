class InpuVal {
    #money;
  
    constructor(money) {
      this.validate(money);
      this.#money = money;
    }
  
    validate(money) {
      if (/[^0-9]/.test(money)) {
        throw new Error("[ERROR] 금액은 숫자여야 합니다.");
      }
      if (money%1000) {
        throw new Error("[ERROR] 금액은 1000 단위여야 합니다.");
      }
    }
  
  }
  
  module.exports = InpuVal;
  