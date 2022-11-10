const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const numSet = new Set(numbers);
    const escape = ["\n", "\t", "\a", "\v", "\b", "\f", "\\", "\'", "\""];

    if (numbers.length !== 6) {
      throw `[ERROR] 로또 번호는 6개여야 합니다.`;
    }

    if (numSet.size !== 6) {
      throw `[ERROR] 로또 번호가 중복됩니다.`;
    }
    
    escape.forEach((element) => {
      if (numSet.has(element)) {
        throw `[ERROR] 번호들은 콤마(,)로만 구분되며 이스케이프 문자를 사용하지 않습니다.`
      }
    })

    numbers.forEach((num) => {
      if (isNaN(num)) {
        throw `[ERROR] 숫자가 아닌 값이 있습니다.`;
      }

      if (Number(num) < 1 || Number(num) > 45) {
        throw `[ERROR] 로또 번호는 1 ~ 45번까지만 존재합니다.`; 
      }
    });
  }

  printLottoNumbers() {
    MissionUtils.Console.print(`[${this.#numbers.join(", ")}]`);
  }

  calRank(winningNums) {
    const bonusNumber = winningNums.pop();
    const winningNumSet = new Set(winningNums);
    let countOfCorrectNum = 0;
    let bonusFlag = false;

    for (let num of this.#numbers) {
      if (winningNumSet.has(num)) {
        countOfCorrectNum++;
      }

      if (num === bonusNumber){
        bonusFlag = true;
      }
    }

    return this.standardOfRank(countOfCorrectNum, bonusFlag);
  }

  standardOfRank(count, flag) {
    let rank = 0;

    switch (count) {
      case 3:
        rank = 5;
        break;

      case 4:
        rank = 4;
        break;

      case 5:
        rank = 3;
        break;

      case 6:
        rank = 1;
        break;
      
      default:
        break;
    }

    if (rank === 3 && flag === true) {
      rank = 2;
    }

    return rank;
  }
}

module.exports = Lotto;
