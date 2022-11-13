const { Console } = require("@woowacourse/mission-utils");

const LOTTO_ERROR = {
  range: "[ERROR] 로또 번호는 1~45 사이여야 합니다",
  number: "[ERROR] 로또 번호는 숫자여야 합니다",
  length: "[ERROR] 로또 번호는 6개여야 합니다.",
  duplicate: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
};
const RESULT_INFO = {
  rank1: "6개 일치 (2,000,000,000원)",
  rank2: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  rank3: "5개 일치 (1,500,000원)",
  rank4: "4개 일치 (50,000원)",
  rank5: "3개 일치 (5,000원)",
};

class Lotto {
  #numbers; // 당첨번호

  constructor(numbers) {
    this.validateNumbers(numbers);
    this.#numbers = numbers.map((x) => Number(x));
  }

  printResult(numbersArray, bonusNum) {
    const winningCnt = [0, 0, 0, 0, 0];
    for (let arr of numbersArray) {
      this.checkLotto(winningCnt, arr, bonusNum);
    }
    this.printWinningStatistics(winningCnt, numbersArray, bonusNum);
  }

  checkLotto(winningCnt, yourNum, bonusNum) {
    let cnt = 0;
    for (let num of yourNum) {
      if (this.#numbers.includes(num)) {
        cnt += 1;
      }
    }
    if (cnt < 3) return;
    this.plusCnt(winningCnt, cnt, yourNum, bonusNum);
  }

  printWinningStatistics(winningCnt) {
    Console.print(`${RESULT_INFO.rank5} - ${winningCnt[0]}개`);
    Console.print(`${RESULT_INFO.rank4} - ${winningCnt[1]}개`);
    Console.print(`${RESULT_INFO.rank3} - ${winningCnt[2]}개`);
    Console.print(`${RESULT_INFO.rank2} - ${winningCnt[3]}개`);
    Console.print(`${RESULT_INFO.rank1} - ${winningCnt[4]}개`);
  }

  plusCnt(winningCnt, cnt, yourNum, bonusNum) {
    switch (cnt) {
      case 3:
      case 4:
        winningCnt[cnt - 3] += 1;
        break;
      case 5:
        if (yourNum.includes(bonusNum)) {
          winningCnt[3] += 1;
        } else {
          winningCnt[2] += 1;
        }
        break;
      case 6:
        winningCnt[4] += 1;
        break;
    }
  }

  validateNumbers(numbers) {
    if (numbers.length !== 6) {
      Console.close();
      throw new Error(LOTTO_ERROR.length);
    }
    if (numbers.find((num) => isNaN(num))) {
      Console.close();
      throw new Error(LOTTO_ERROR.number);
    }
    if (numbers.find((num) => num > 45 && num < 1)) {
      Console.close();
      throw new Error(LOTTO_ERROR.range);
    }
    if ([...new Set(numbers)].length !== numbers.length) {
      Console.close();
      throw new Error(LOTTO_ERROR.duplicate);
    }
  }
}

module.exports = Lotto;
