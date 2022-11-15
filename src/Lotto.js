const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers, pickRandomNumberArr, lottoMoney) {
    this.checkWinBonusNumber(numbers, 6);
    this.#numbers = numbers;
    this.inputBonusNumber(pickRandomNumberArr, lottoMoney);
  }

  checkWinBonusNumber(winNumberArr, arrSize) {
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

  inputBonusNumber(pickNumberArray, lottoMoney) {
    MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      this.checkWinBonusNumber(bonusNumber.split(), 1);
      this.winningCalculate(bonusNumber, pickNumberArray, lottoMoney);
    });
  }

  winningCalculate(bonusNumber, randomNumberArr, lottoMoney) {
    let matchNumberArr = [0, 0, 0, 0, 0];
    randomNumberArr.forEach((randomNumber) => {
      let matchNumCnt = randomNumber.filter((it) => this.#numbers.includes(it)).length;
      if (matchNumCnt == 5 && randomNumber.includes(Number(bonusNumber))) {
        matchNumCnt += 2;
      }
      this.countMatchNumber(matchNumberArr, matchNumCnt);
    });
    this.printMatchNumber(matchNumberArr, lottoMoney);
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

  printMatchNumber(matchNumberArr, lottoMoney) {
    MissionUtils.Console.print("\n당첨 통계\n---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${matchNumberArr[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${matchNumberArr[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${matchNumberArr[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchNumberArr[3]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${matchNumberArr[4]}개`);
    this.printLottoReturn(matchNumberArr, lottoMoney);
  }

  printLottoReturn(matchNumArr, lottoMoney) {
    let total = 0;
    let returnMoney = [5000, 50000, 1500000, 30000000, 2000000000];
    for (let index = 0; index < 5; index++) {
      total += matchNumArr[index] * returnMoney[index];
    }
    const lottoReturn = ((total / lottoMoney) * 100).toFixed(2);
    MissionUtils.Console.print(`총 수익률은 ${parseFloat(lottoReturn)}%입니다.`);
    MissionUtils.Console.close();
  }
}

// TODO: 추가 기능 구현
module.exports = Lotto;
