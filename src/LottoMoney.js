class lottoMoney {
    #numbers;
  
    constructor(numbers) {
      this.validate(numbers);
      this.#numbers = numbers;
      //this.#numbers = this.ExceptionOfLottoMoney(numbers);
    }
  
    validate(numbers) {
      if(numbers % 1000 != 0){
        throw new Error("[ERROR] 구매금액은 1000원 단위여야 합니다.");
      }
    }
}
  
  module.exports = lottoMoney;