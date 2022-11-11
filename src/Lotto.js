class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (isNaN(number)) throw new Error('[ERROR] 숫자가 아닙니다.');
    if (numbers.length !== new Set(numbers).size) throw new Error("[ERROR] 중복되는 숫자가 존재합니다.");
    
    const validNumber = numbers.filter(number => number > 0 && number < 46);
    if (numbers !== validNumber) throw new Error("[ERROR] 1과 45사이의 숫자를 입력해주세요.")
    
    const RegExp = /^[0-9|,]+$/;
    if (RegExp.test(numvers)) throw new Error("[ERROR] 올바른 형식으로 입력해주세요.");
  }

  validateBonus(number) {
    // 보너스 번호 확인
    if (number < 1 && number >9) throw new Error("[ERROR] 한자리 숫자를 입력해주세요.");
    if (this.#numbers.includes(number)) throw new Error("[ERROR] 당첨 번호와 값이 중복됩니다.");
  }



  

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
