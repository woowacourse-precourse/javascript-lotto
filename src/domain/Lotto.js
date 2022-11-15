const { Random } = require("@woowacourse/mission-utils");
const LottoNumbers = require("./LottoNumber");
const LottoValidator = require("../validator/LottoValidator");
const LottoRank = require("./LottoRank");
const {
  CHECK_MATCH_BONUS_LIMIT,
  STATIC_RANK,
  STATIC_TEMPLATE,
} = require("../constants/gameCondition");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const lottoValidator = new LottoValidator();
    lottoValidator.validate(numbers);
  }

  // TODO: 추가 기능 구현
  isContain(number) {
    return this.#numbers.includes(number);
  }

  isEqual(lotto) {
    return JSON.stringify(this.#numbers) === JSON.stringify(lotto.#numbers);
  }

  toString() {
    return "[" + this.#numbers.join(", ") + "]";
  }

  getRank(winNumbers, bonusNumber) {
    const matchCount = this.#containWinNumber(winNumbers);
    const hasBonus = this.#containBonusNumber(bonusNumber);

    return new LottoRank().getRank(matchCount, hasBonus);
  }

  #containWinNumber(winNumbers) {
    return this.#numbers.filter((number) => winNumbers.includes(number)).length;
  }

  #containBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

module.exports = Lotto;
