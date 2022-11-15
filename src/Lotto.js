const MissionUtils = require("@woowacourse/mission-utils");
const { convertArrayToString, outofLottoNumberRange } = require("./utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * 생성자로 들어온 매개변수 numbers가 올바른 입력인지 판단하는 함수
   * @param {number[]} numbers 생성자로 들어온 숫자 배열
   */
  validate(numbers) {
    this.checkLengthEqualsSix(numbers);
    this.checkEachNumberInValidRange(numbers);
    this.checkRedundancy(numbers);
  }

  /**
   * 생성자로 들어온 매개변수 numbers의 길이가 6인지 판단하는 함수
   * @param {number[]} numbers 생성자로 들어온 숫자 배열
   */
  checkLengthEqualsSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  /**
   * 생성자로 들어온 매개변수 numbers의 각 숫자가 1-45 범위에 있는지 판단하는 함수
   * @param {number[]} numbers 생성자로 들어온 숫자 배열
   */
  checkEachNumberInValidRange(numbers) {
    for (let number of numbers) {
      if (outofLottoNumberRange(number)) {
        throw new Error("[ERROR] 로또 번호는 1-45 사이 숫자여야 합니다.");
      }
    }
  }

  /**
   * 생성자로 들어온 매개변수 numbers의 각 숫자가 서로 중복이 없는지 판단하는 함수
   * @param {number[]} numbers 생성자로 들어온 숫자 배열
   */
  checkRedundancy(numbers) {
    let temp = [];
    for (let number of numbers) {
      if (temp.includes(number)) {
        throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
      }
      temp.push(number);
    }
  }

  /**
   * 특정 숫자가 이 로또 객체의 숫자에 포함되어 있는지를 반환하는 함수
   * @param {number} number 비교할 숫자
   * @returns {boolean} 포함 여부
   */
  includesNumber(number) {
    return this.#numbers.includes(number);
  }

  /**
   * 이 로또의 번호를 출력하는 함수
   */
  printNumbers() {
    const NUMBERS_IN_STRING = convertArrayToString(this.#numbers);
    MissionUtils.Console.print(NUMBERS_IN_STRING);
  }

  /**
   * 해당 로또를 당첨 번호 및 보너스 번호와 비교하여 등수를 반환하는 함수
   * @param {Lotto} WonLotto 당첨 번호를 담은 로또 객체
   * @param {number} bonus 보너스 볼 번호
   * @returns {number} 당첨 등수(0-5등)
   */
  compareWithWinningNumbers(WonLotto, bonus) {
    let correspondence = 0;
    this.#numbers.forEach((number) => {
      if (WonLotto.includesNumber(number)) correspondence++;
    })

    return this.getPrize(correspondence, this.includesNumber(bonus));
  }

  /**
   * 일치한 번호 개수와 보너스 번호 일치 여부를 바탕으로 등수를 반환하는 함수
   * @param {number} correspondence 당첨 번호와 일치한 번호 개수
   * @param {boolean} bonusCorrespondence 보너스 번호 일치 여부
   * @returns {number} 등수
   */
  getPrize(correspondence, bonusCorrespondence) {
    switch (correspondence) {
      case 3:
        return 5;

      case 4:
        return 4;

      case 5:
        return (bonusCorrespondence) ? 2 : 3;

      case 6:
        return 1;

      default:
        return 0;
    }
  }
}

module.exports = Lotto;
