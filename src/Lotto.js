class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const numSet = new Set(numbers);
    if (numSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이면 안됩니다.");
    }
    if(Math.min(...numSet) < 1 || 46 < Math.max(...numSet)){
      throw new Error("[ERROR] 로또 번호는 1~45 까지의 숫자입니다.");
    }
  }

  validateBonusNumber(bonus){
    if(this.#numbers.includes(bonus)){
      throw new Error("[ERROR] 보너스 번호가 다른 번호와 중복이면 안됩니다.");
    }
    if(1 > bonus || 45 < bonus){
      throw new Error("[ERROR] 보너스 번호는 1~45 까지의 숫자입니다.");
    }
  }

  compareLottoNumber(userLotto, bonus){
    const lotto = this.countNumber(userLotto);
    if(2 < lotto && lotto < 6) {
      return lotto - 3;
    }
    if(lotto == 5 && this.includeBonusNumber(userLotto, bonus)){
      return 3;
    }
    if(lotto == 6){
      return 4;
    }
    return -1;
  }

  countNumber(userLotto){
    let lotto = 0;
    for(let index = 0; index < userLotto.length; index++){
      if(userLotto.includes(this.#numbers[index])){
        lotto += 1;
      }
    }
    return lotto;
  }

  includeBonusNumber(userLotto, bonus){
    return userLotto.includes(bonus)
  }
}

module.exports = Lotto;