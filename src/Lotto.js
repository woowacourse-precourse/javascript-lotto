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
    if (Number(bonus) < 0 || Number(bonus) > 45)
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    if (isNaN(bonus)) throw new Error("[ERROR] 문자를 입력하실 수 없습니다.");
    if (this.#numbers.indexOf(Number(bonus)) >= 0)
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

  countWinLotto(isMatch, bonusMatch) {
    let matchNums = new Array(4);
    for (let win = 3; win < 7; ++win) {
      matchNums[win - 3] = isMatch.reduce((cnt, element) => cnt + (win === element), 0);
    }
    if (bonusMatch) matchNums[2]--;
    return matchNums;
  }

  priceEarningsRatio(isMatch, matchNums, bonusMatch) {
    let buyPrice = 1000 * isMatch.length;
    let earnPrice = 0;
    earnPrice += 30000000 * bonusMatch;
    earnPrice += 5000 * matchNums[0];
    earnPrice += 50000 * matchNums[1];
    earnPrice += 1500000 * matchNums[2];
    earnPrice += 2000000000 * matchNums[3];
    let earningRatio = (100 * (earnPrice / buyPrice).toFixed(3)).toFixed(1);
    return earningRatio;
  }

  printWinResult(isMatch, bonusMatch) {
    let winLottoCount = this.countWinLotto(isMatch, bonusMatch);
    let priceEarn = this.priceEarningsRatio(isMatch, winLottoCount, bonusMatch);
    Console.print("\n당첨 통계\n---");
    Console.print("3개 일치 (5,000원) - " + winLottoCount[0] + "개");
    Console.print("4개 일치 (50,000원) - " + winLottoCount[1] + "개");
    Console.print("5개 일치 (1,500,000원) - " + winLottoCount[2] + "개");
    Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + bonusMatch + "개");
    Console.print("6개 일치 (2,000,000,000원) - " + winLottoCount[3] + "개");
    Console.print("총 수익률은 " + priceEarn + "%입니다.");
    return;
  }
}

module.exports = Lotto;
