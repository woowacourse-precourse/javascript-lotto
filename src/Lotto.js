const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
    numbers.map((number) => {
      if (isNaN(number)) {
        throw new Error("[ERROR] 숫자가 아닌 값을 입력했습니다.");
      }
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 1-45 사이의 숫자가 아닙니다.");
      }
    });
  }
  // TODO: 추가 기능 구현

  getNumbers() {
    return this.#numbers;
  }

  countWinningNumber(userLottoList, bonusNumber) {
    const privateNumbers = this.getNumbers();
    const countArr = [];
    for (let lottoIndex = 0; lottoIndex < userLottoList.length; lottoIndex++) {
      countArr.push(
        this.compareNumbers(
          userLottoList[lottoIndex],
          privateNumbers,
          bonusNumber
        )
      );
    }
    return countArr;
  }

  compareNumbers(userLotto, winningNumber, bonusNumber) {
    const countResult = [];
    let count = 0;
    for (let index = 0; index < winningNumber.length; index++) {
      if (userLotto.includes(winningNumber[index])) {
        count++;
      }
    }
    if (count === 5 && userLotto.includes(bonusNumber)) {
      countResult.push(count, bonusNumber);
    }
    if (count !== 5 || !userLotto.includes(bonusNumber)) {
      countResult.push(count);
    }
    return countResult;
  }
}

module.exports = Lotto;
