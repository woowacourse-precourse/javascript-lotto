const utils = require('./utils');
const Constant = require('./Constant');

class Lotto {
  #numbers;
  #same;
  #bonus;

  constructor(numbers) {
    utils.validateLotto(numbers);
    this.#numbers = numbers;
    this.#same = 0;
    this.#bonus = false;
  }

  // 당첨된 번호 갯수 반환하는 함수
  get WinningNumber(){
    return this.#same;
  }

  // 보너스 여부 반환 함수
  get bonus(){
    return this.#bonus;
  }

  // 당첨된 번호 갯수 계산하는 함수
  calcWinning(winnings){
    for(let i = 0 ; i <Constant.LOTTO_LENGTH ; i++ ){
      if(this.#numbers.includes(Number(winnings[i]))){
        this.#same += 1;
      }
    }
  }

  // 보너스 번호 일치하는지 확인하는 함수
  matchBonus(bonus){
    if(this.#numbers.includes(Number(bonus))){
      this.#bonus = true;
    }
  }

  // 수익금
}

module.exports = Lotto;
