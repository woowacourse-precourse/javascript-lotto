const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    
    numbers.forEach(number => {
      if (number > 45 || number < 1) {
        throw new Error("[ERROR] 번호의 범위는 1~45 입니다.");}
    })
    
    const orderedNumbers = new Set(numbers)
    if(Array.from(orderedNumbers).length !== 6){throw new Error("[ERROR] 중복된 숫자가 있습니다.");}

    MissionUtils.Console.close();
    return
  }


  // TODO: 추가 기능 구현
}


MissionUtils.Console.close();

//>>>>>>>>>>>>test<<<<<<<<<<<<<<



module.exports = Lotto;
