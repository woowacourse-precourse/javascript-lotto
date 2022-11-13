const answerValidation = require("./answerValidation.js");

class Lotto {
  #numbers;

  constructor(numbers, bonus) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonus = bonus
  }
  
   
  validate(numbers) {
    const numbersArr = Array.from(numbers).map((i) => Number(i)); //문자열을 Number형 배열로 변환
    answerValidation(numbersArr);

  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
