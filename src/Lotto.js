const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers, bonus, count, lottoNumArr) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.lottoCount = count;
    this.bonusNum = bonus;
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
}

module.exports = Lotto;
