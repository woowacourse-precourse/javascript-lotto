const MissionUtils = require("@woowacourse/mission-utils");
const SETTING = require("./constants/setting");

const ERROR_MESSAGE = {
  WRONG_LENGTH: `[ERROR] 로또의 숫자는 ${SETTING.LOTTO_NUMBER_LENGTH}개여야 합니다.`,
  DUPLICATE: "[ERROR] 로또의 각 숫자들은 중복되지 않아야 합니다.",
};

const ranks = ["noRank", "noRank", "noRank", "rank5", "rank4", "rank3", "rank1", "rank2"];
const COUNT_TO_CHECK_BONUS = 5;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.matchedNumberCount = 0;
    this.isBonusNumberMatched = false;

    this.print();
  }

  print() {
    MissionUtils.Console.print(`[${this.#numbers.join(", ")}]`);
  }

  validate(numbers) {
    if (numbers.length !== SETTING.LOTTO_NUMBER_LENGTH) {
      throw new Error(ERROR_MESSAGE.WRONG_LENGTH);
    }

    if (new Set(numbers).size !== SETTING.LOTTO_NUMBER_LENGTH) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }

  compareWith(winNumber) {
    const winNumbers = winNumber.split(",").map((number) => Number(number));

    this.#numbers.forEach((lottoNumber) => {
      if (winNumbers.includes(lottoNumber)) this.matchedNumberCount++;
    });
  }

  has(bonusNumber) {
    if (this.matchedNumberCount === COUNT_TO_CHECK_BONUS && this.#numbers.includes(bonusNumber)) {
      this.isBonusNumberMatched = true;
    }
  }

  setRank() {
    if (this.isBonusNumberMatched === true) {
      return ranks[ranks.length - 1];
    }

    return ranks[this.matchedNumberCount];
  }
}

module.exports = Lotto;
