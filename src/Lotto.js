const {ERROR_MESSAGE} = require("./message.js")

class Lotto {
  #numbers;

  constructor(numbers, bonus) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  //아무것도 입력되지는 않았는지 확인
  checkBlank(numbers) {
    if (numbers === "") throw new Error(ERROR_MESSAGE.BLANK);
    return;
  }
  //숫자가 총 6개인지 확인
  checkLength(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.SIX_DIGIT);
    return;
  }
  //숫자 외의 문자가 입력된 경우인지 확인
  checkType(numbers){
    const numbersArr = Array.from(numbers).map((i) => Number(i)); //문자열을 Number형 배열로 변환
    for(var i=0;i<numbersArr.length;i++){
      if(isNaN(numbersArr[i])) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
  }
  //숫자들 중 중복값이 있는지 확인
  checkDuplicate(numbers) {
    const numbersSet = new Set(numbers); //배열을 집합으로 변환
    const IS_DUPLICATE = numbersSet.size < numbers.length; //배열의 원소 중복 여부    
    if (IS_DUPLICATE) throw new Error(ERROR_MESSAGE.DUPLICATE);
    return;
  }

  validate(numbers) {
    this.checkBlank(numbers);
    this.checkLength(numbers);
    this.checkType(numbers);
    this.checkDuplicate(numbers);

  }

}

module.exports = Lotto;
