const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    let isNumCheck = numbers.join("");
    if (isNaN(isNumCheck)) throw new Error("[ERROR] 문자를 입력하실 수 없습니다.");
    for (let i = 0; i < 6; ++i) {
      if (numbers[i] < 0 || numbers[i] > 45)
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    let numSet = [...new Set(numbers)];
    if (numbers.length != numSet.length) throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
  }

  bonusNumberException(bonus) {
    if (isNaN(bonus)) throw new Error("[ERROR] 문자를 입력하실 수 없습니다.");
    if (this.#numbers.indexOf(bonus) >= 0)
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.");
  }

  isMatching(winnum, myNumber) {
    let matchCount = 0;
    for (let k = 0; k < 6; ++k) {
      let my = myNumber[k];
      if (my == winnum) matchCount++;
    }
    return matchCount;
  }

  compareLottoNums(myNumbers, winNums) {
    let isMatch = new Array(myNumbers.length).fill(0);
    let bonusNum = winNums.pop();

    for (let i in myNumbers) {
      for (let j in winNums) {
        let winnum = Number(winNums[j]);
        isMatch[i] += this.isMatching(winnum, myNumbers[i]);
      }
    }
    return isMatch;
  }

  compareBonus(myNumbers, bonus, isMatch) {
    let bonusMatch = 0;
    for (let i in isMatch) {
      if (isMatch[i] == 5) {
        bonusMatch += this.isMatching(bonus, myNumbers[i]);
      }
    }
    return bonusMatch;
  }
}

module.exports = Lotto;
