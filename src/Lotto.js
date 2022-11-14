const utils = require('./utils');
const Constant = require('./Constant');

class Lotto {
  #numbers;
  #same;

  constructor(numbers) {
    this.#validateLength(numbers);
    this.#validateNumber(numbers);
    this.#numbers = numbers;
    this.#same = 0;
  }

  // TODO: 추가 기능 구현
  /**
   * 입력된 lotto 번호의 길이가 6이 아닌 경우 체크
   */
  #validateLength(numbers) {
    if (numbers.length !== Constant.LOTTO_LENGTH) {
      throw new Error("[ERROR] 로또 번호는 "+Constant.LOTTO_LENGTH+"개여야 합니다.");
    }
  }

  #validateNumber(numbers) {
      for(let i = 0 ; i < Constant.LOTTO_LENGTH ; i++){
        if(numbers[i] <= 0 || numbers[i] >= 46){
          throw new Error("[ERROR] 로또 번호는 1~45사이어야 합니다.");
        }
      }
  }
}

module.exports = Lotto;
