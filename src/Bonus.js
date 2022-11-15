class Bonus {
    #bonus;
    #numbers;
  
    constructor(numbers, bonus) {
      this.#numbers = numbers;
      this.#bonus = bonus;
      this.validate(bonus);
    }
  
    validate(bonus) {
      this.validateBonusRange(bonus);
      this.validateUniqueBonus(bonus);
      this.validateIntegerBonus(bonus);
    }
  
    validateBonusRange(bonus) {
      if (!(bonus >= 1 && bonus <= 45)) {
        throw new Error(
          '[ERROR] 보너스 번호는 1에서 45 사이의 숫자만 가능합니다.'
        );
      }
    }
  
    validateUniqueBonus(bonus) {
      if (this.#numbers.includes(bonus)) {
        throw new Error('[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.');
      }
    }
  
    validateIntegerBonus(bonus) {
      if (isNaN(bonus)) {
        throw new Error('[ERROR] 보너스 번호는 정수이어야 합니다.');
      }
    }
  
    getBonus() {
      return this.#bonus;
    }
  }
  
  module.exports = Bonus;
  