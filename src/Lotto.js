const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers)
    this.#numbers = numbers;
  }

  validate(numbers, limit) {
    if (numbers.length !== limit) {
      throw new Error(`[ERROR] 로또 번호는 ${limit}개여야 합니다.`);
    }
    
    numbers.forEach(number => {
      if (number > 45 || number < 1) {
        throw new Error("[ERROR] 번호의 범위는 1~45 입니다.");}
    })

    const orderedNumbers = new Set(numbers)
    if(Array.from(orderedNumbers).length !== limit){
      throw new Error("[ERROR] 중복된 숫자가 있습니다.")
    }
    
    return 
  }




  // TODO: 추가 기능 구현
}




//>>>>>>>>>>>>test<<<<<<<<<<<<<<
// const lotto = new Lotto();
// lotto.inputWinningNumber();
// lotto.start()


module.exports = Lotto;
