const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;
  arr = [,,,,,];
  constructor(numbers) {
    this.validate(numbers);
    this.overlap_check(numbers);
    this.#numbers = numbers;
  }

  get_numbers(){return this.#numbers}

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  overlap_check(numbers){
    const set = new Set(numbers);
    if(set.size != numbers.length){
      throw new Error("[ERROR] 로또 번호는 중복이 되지 않습니다.")
    }
  }

  Compare(answers){
    var count = 0;
    for(var i = 0; i<this.#numbers.length; i++){
      if(answers.toString().includes(this.#numbers[i])){
        count += 1;
        delete answers.indexOf(this.#numbers[i]);
      }
    }
    return count;
  }

  Check_Bonus(answers, bonus){
    if(answers.includes(bonus))
      return true;
  }
  
  Check_Lotto(count, bonus, answers, result){
    if(count == 3){
      result[0] += 1;
    }else if(count == 4){
      result[1] += 1;
    }else if(count == 5){
      if(this.Check_Bonus(answers, bonus))
        result[2] += 1;
      else
        result[3] += 1;
    }else if(count == 6){
        result[4] += 1;
    }
    return result;
  }

}

module.exports = Lotto;
