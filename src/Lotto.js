const MissionUtils = require("@woowacourse/mission-utils");

const ESCAPE = ["\n", "\t", "\a", "\v", "\b", "\f", "\\", "\'", "\""];

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    MissionUtils.Console.close();
  }

  validate(numbers) {
    const numSet = new Set(numbers);

    if (numbers.length !== 6) {
      throw `[ERROR] 로또 번호는 6개여야 합니다.`;
    }
    if (numSet.size !== 6) {
      throw `[ERROR] 로또 번호가 중복됩니다.`;
    }

    ESCAPE.forEach((element) => {
      if (numSet.has(element)) {
        throw `[ERROR] 번호들은 콤마(,)로만 구분되며 이스케이프 문자를 사용하지 않습니다.`;
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
    this.#numbers.sort((a, b) => a - b);
    MissionUtils.Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getRankFromLotto(winningNums) {
    const bonusNumber = winningNums.pop();
    const winningNumSet = new Set(winningNums);
    let correctCount = 0;
    let bonusFlag = false;

    for (let num of this.#numbers) {
      if (winningNumSet.has(num)) {
        correctCount++;
      }
      if (num === bonusNumber){
        bonusFlag = true;
      }
    }

    return this.decideRank(correctCount, bonusFlag);
  }

  decideRank(correctCount, bonusFlag) {
    let rank = 0;

    switch (correctCount) {
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

    if (rank === 3 && bonusFlag === true) {
      rank = 2;
    }

    return rank;
  }
}

module.exports = Lotto;
