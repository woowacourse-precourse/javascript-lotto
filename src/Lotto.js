const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers, pickRandomNumberArr) {
    this.checkWinNumber(numbers, 6);
    this.#numbers = numbers;
    this.inputBonusNumber(pickRandomNumberArr);
  }

  checkWinNumber(winNumberArr, arrSize) {
    if (new Set(winNumberArr).size != arrSize) throw new Error("[ERROR]로또 번호 입력 오류");
    winNumberArr.forEach((number) => {
      if (!Number(number)) throw new Error("[ERROR]로또 번호 입력 오류");
      if (number > 45 || number < 1) throw new Error("[ERROR]로또 번호 입력 오류");
    });
    if (arrSize == 1) {
      if (this.#numbers.includes(Number(winNumberArr))) {
        throw new Error("[ERROR] 로또 번호 입력 오류");
      }
    }
  }

  inputBonusNumber(pickNumberArray) {
    MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      this.checkWinNumber(bonusNumber.split(), 1);
      this.winningCalculate(bonusNumber, pickNumberArray);
    });
  }

  winningCalculate(bonusNumber, randomNumberArr) {
    let matchNumberArr = [0, 0, 0, 0, 0];
    randomNumberArr.forEach((randomNumber) => {
      let matchNumCnt = randomNumber.filter((it) => this.#numbers.includes(it)).length;
      if (matchNumCnt == 5 && randomNumber.includes(Number(bonusNumber))) {
        matchNumCnt += 2;
      }
      MissionUtils.Console.print(matchNumCnt);
      this.countMatchNumber(matchNumberArr, matchNumCnt);
    });
    MissionUtils.Console.print(matchNumberArr);
  }

  countMatchNumber(matchNumberArr, matchNum) {
    switch (matchNum) {
      case 3:
        return (matchNumberArr[0] = matchNumberArr[0] + 1);
      case 4:
        return (matchNumberArr[1] = matchNumberArr[1] + 1);
      case 5:
        return (matchNumberArr[2] = matchNumberArr[2] + 1);
      case 7:
        return (matchNumberArr[3] = matchNumberArr[3] + 1);
      case 6:
        return (matchNumberArr[4] = matchNumberArr[4] + 1);
    }
  }
}

// TODO: 추가 기능 구현
module.exports = Lotto;
