const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  // 유효한 값 검사
  validate(numbers) {
    const numSet = new Set(numbers);

    if (numbers.length !== 6) {
      throw `[ERROR] 로또 번호는 6개여야 합니다.`;
    }

    if (numSet.size !== 6) {
      throw `[ERROR] 로또 번호가 중복됩니다.`;
    }

    numbers.forEach((num) => {
      if (Number.isNaN(num)) {
        throw `[ERROR] 숫자가 아닌 값이 있습니다.`;
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
        if (flag === true) {
          rank = 2;
          break;
        } 
        rank = 3;
        break;

      case 6:
        rank = 1;
        break;
      
      default:
        break;
    }

    return rank;
  }
}

module.exports = Lotto;
