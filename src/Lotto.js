const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers, bonus, count, lottoNumArr, money) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.lottoCount = count;
    this.bonusNum = bonus;
    this.userMoney = money;
    this.lottoNumArr = lottoNumArr;
    this.currentScore = [0, 0, 0, 0, 0, 0];
  }

  validate(numbers) {
    const forValidateNum = numbers;
    if (forValidateNum.length != 6) {
      throw new Error("[ERROR] 6개의 숫자를 입력해주세요.");
    }

    forValidateNum.forEach((element) => {
      if (isNaN(element)) {
        throw new Error("[ERROR] 숫자만 입력해주세요.");
      }

      if (element < 1 || 45 < element) {
        throw new Error("[ERROR] 입력받은 숫자의 범위를 초과합니다.");
      }
    });

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 중복된 값을 입력하셨습니다.");
    }
  }

  playLotto() {
    for (let i = 0; i < this.lottoNumArr.length; i++) {
      this.scoreCalculation(
        this.compareLotteryNum(this.#numbers, this.lottoNumArr[i]),
        this.lottoNumArr[i]
      );
    }
    this.showResult();
    this.showYield();
  }

  compareLotteryNum(numbers, lottoNumArr) {
    const sumNumAndLottoNum = [...numbers, ...lottoNumArr];
    const sumNumAndLottoNumLength = sumNumAndLottoNum.length;
    const removeDuplicateElements = new Set(sumNumAndLottoNum).size;

    return sumNumAndLottoNumLength - removeDuplicateElements;
  }

  scoreCalculation(NumOfDuplicateElements, lottoNumArr) {
    if (NumOfDuplicateElements === 3) {
      this.currentScore[0]++;
    }
    if (NumOfDuplicateElements === 4) {
      this.currentScore[1]++;
    }
    if (NumOfDuplicateElements === 5) {
      this.currentScore[2]++;
    }
    if (
      NumOfDuplicateElements === 5 &&
      this.compareBonus(lottoNumArr, this.bonusNum)
    ) {
      this.currentScore[3]++;
    }
    if (NumOfDuplicateElements === 6) {
      this.currentScore[4]++;
    }
  }

  compareBonus(lottoNumArr, bonusNum) {
    const compareBonusandNum = lottoNumArr;
    compareBonusandNum.forEach((element) => {
      if (element === bonusNum) {
        return true;
      }
    });
  }

  showResult() {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${this.currentScore[0]}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${this.currentScore[1]}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.currentScore[2]}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.currentScore[3]}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.currentScore[4]}개`
    );
  }

  showYield() {
    const totalAmount =
      5000 * this.currentScore[0] +
      50000 * this.currentScore[1] +
      1500000 * this.currentScore[2] +
      30000000 * this.currentScore[3] +
      2000000000 * this.currentScore[4];

    const Yield = ((totalAmount / this.userMoney) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${Yield}%입니다.`);
    MissionUtils.Console.close();
  }
}

module.exports = Lotto;
