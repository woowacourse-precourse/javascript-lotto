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

    let tmp = []
  
    numbers.forEach((number)=>{
      if (tmp.includes(number))
        throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
      if(number < 1 || number > 45)
        throw new Error("[ERROR] 로또 번호는 1부터 45사이의 정수만 입력할 수 있습니다.");
      tmp.push(number);
    });
  }

  statistics(lottoNumbers, bonus){
    let result = [];
    result.length = 8;
    result.fill(0);
    
    lottoNumbers.forEach((number)=>{
      let count = this.check(number, bonus);
      if(count != 0){
        result[count] += 1;
      }
    });
    return result;
  }
  
  check(number, bonus){
    let count = 0;
    for(let i = 0;i<number.length;i++){
      if(this.#numbers.includes(number[i]))
        count += 1;
    }
    if(count > 2){
      if(count == 5){
        if(this.checkBonus(number, Number(bonus)))
          return 7;
        else return count;
      }
    }
    return 0;
  }

  checkBonus(number, bonus){
    if(number.includes(bonus))
      return true;
    return false;
  }
}

module.exports = Lotto;
