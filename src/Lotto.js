const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers !== undefined) {
      if (!Lotto.itThatRightFormat(numbers)) {
        Console.close();
        throw new Error("[ERROR] 올바른 형식으로 입력해주세요.");
      }
      if (!Lotto.isThatSix(numbers)) {
        Console.close();
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      }
      if (Lotto.numberNet(numbers)) {
        Console.close();
        throw new Error("[ERROR] 1과 45사이의 숫자를 입력해주세요.");
      }
      if (Lotto.isThatDuplicate(numbers)) {
        Console.close();
        throw new Error("[ERROR] 중복되는 숫자가 존재합니다.");
      }
    }
  }

  // bonusValidate(number) {
  //   this.singleNumberNet(number);
  //   this.isThatInclude(number);
  //   this.isThatOne(number);
  //   this.isThatNumber(number);
  // }

  static isThatSix(numbers) {
    return numbers.length === 6;
  }

  static isThatDuplicate(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  static itThatRightFormat(numbers) {
    const RegExp = /^[1-9|,]+$/;
    return RegExp.test(numbers);
  }

  static numberNet(numbers) {
    const validNumber = numbers.filter(number => number > 0 && number < 46);
    console.log(validNumber.length);
    console.log(numbers.length);
    return numbers.length !== validNumber.length;
  }

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
