class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers !== undefined) {
      this.isThatNumber(numbers);
      this.numberNet(numbers);
      this.isThatDuplicate(numbers);
      this.itThatRightFormat(numbers);
      this.isThatSix(numbers);
    }
  }

  // bonusValidate(number) {
  //   this.singleNumberNet(number);
  //   this.isThatInclude(number);
  //   this.isThatOne(number);
  //   this.isThatNumber(number);
  // }

  // isThatSix(numbers) {
  //   if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  // }

  // isThatNumber(numbers) {
  //   const RegExp = /^[1-9]+$/;
  //   if (RegExp.test(numbers)) throw new Error('[ERROR] 숫자가 아닙니다.');
  // }

  // isThatDuplicate(numbers) {
  //   if (numbers.length !== new Set(numbers).size) throw new Error("[ERROR] 중복되는 숫자가 존재합니다.");
  // }

  // itThatRightFormat(numbers) {
  //   const RegExp = /^[0-9|,]+$/;
  //   if (RegExp.test(numbers)) throw new Error("[ERROR] 올바른 형식으로 입력해주세요.");
  // }

  // numberNet(numbers) {
  //   const validNumber = numbers.filter(number => number > 0 && number < 46);
  //   if (numbers !== validNumber) throw new Error("[ERROR] 1과 45사이의 숫자를 입력해주세요.");
  // }

  // singleNumberNet(number) {
  //   if (number < 1 && number > 45) throw new Error("[ERROR] 1과 45사이의 숫자를 입력해주세요.");
  // }

  // isThatInclude(number) {
  //   if (this.#numbers.includes(number)) throw new Error("[ERROR] 당첨 번호와 값이 중복됩니다.");
  // }
  
  // isThatOne(number) {
  //   if (number.length !== 1) throw new Error("[ERROR] 1개의 입력값을 넣어주세요."); 
  // }



  
  

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
