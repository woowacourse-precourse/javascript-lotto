const MissionUtils = require("@woowacourse/mission-utils");

const ESCAPE = ["\n", "\t", "\a", "\v", "\b", "\f", "\\", "\'", "\""];

class Lotto { 
  #numbers;

  constructor(numbers) {
    this.isValidInputNumbers(numbers);
    this.#numbers = numbers;
    MissionUtils.Console.close();
  }

  getNumbers() {
    return this.#numbers;
  }

  isValidInputNumbers(numbers) { 
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
      this.isValidNumber(num, false);
    });
  }

  /**
   * 로또 번호 하나에 대해 유효한 값인지 검사 
   * @param {number} bonusNumber - 검사할 숫자 
   * @param {boolean} isBonusNumber - 보너스 번호에 대한 검사일 경우 true, 아니면 false
   */
  isValidNumber(num, isBonusNumber) {
    if (isNaN(num)) {
      throw `[ERROR] 번호가 숫자형태가 아닙니다.`;
    }

    if (num < 1 || num > 45) {
      throw `[ERROR] 로또 번호는 1 ~ 45까지 입니다.`;
    }

    if (isBonusNumber) {
      if (this.#numbers.includes(num)) {
        throw `[ERROR] 보너스 번호가 앞의 6자리 번호와 중복되는 숫자입니다.`;
      }
    }

    return true;
  }

  addBonusNumber(bonusNumber) {
    if (this.isValidNumber(bonusNumber, true)) {
      this.#numbers.push(bonusNumber);
    }
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
