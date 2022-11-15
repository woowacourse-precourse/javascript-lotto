const MissionUtils = require('@woowacourse/mission-utils')

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((a,b)=>a-b);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getMatch(matchNumbers, bonusNumber){
    const matches = this.#numbers.reduce((acc, number)=>{
      if(matchNumbers.includes(number))acc++
      return acc
    },0)
    const bonus = this.#numbers.includes(bonusNumber)
    return {matches, bonus}
  }

  printLotto(){
    MissionUtils.Console.print(this.#numbers)
  }
}

module.exports = Lotto;
