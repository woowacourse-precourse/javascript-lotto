const MissionUtils = require("@woowacourse/mission-utils");
const { PLACE } = require("./Constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#showNumbers();
  }
  
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (this.#hasDuplicate(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }
  
  #showNumbers() {
    MissionUtils.Console.print(`[${this.#numbers.join(', ')}]`);
    MissionUtils.Console.close();
  }

  #hasDuplicate(numbers) {
    const eliminateDuplicate = numbers.reduce((acc, number) => {
      if (!acc.includes(number)) {
        acc.push(number);
      }
      return acc;
    }, []);
    return eliminateDuplicate.length !== 6;
  }

  winWhatPlace(winningNumber, bonusNumber) {
    let matchedNumber = this.#numbersOfMatchedNumber(winningNumber);
    if (matchedNumber === 6) return PLACE.FIRST;
    if (matchedNumber === 5) {
      if (this.#numbers.includes(bonusNumber)) {
        return PLACE.SECOND;
      }
      return PLACE.THIRD;
    }
    if (matchedNumber === 4) return PLACE.FORTH;
    if (matchedNumber === 3) return PLACE.FIFTH;
    return PLACE.NOTHING;
  }

  #numbersOfMatchedNumber(winningNumber) {
    let matchedNumber = 0;
    this.#numbers.forEach((number) => {
      if (winningNumber.includes(number)) {
        matchedNumber++;
      }
    });
    return matchedNumber;
  }
}

module.exports = Lotto;
