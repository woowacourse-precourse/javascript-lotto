const { ERROR, LOTTO, MONEY } = require('./utiles/Constant');

// 로또회사

class Lotto {
  #numbers;

  constructor() {
    this.#numbers;
  }

  setWinningNumbers(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (this.#invalidLength(numbers))
      throw new Error(`${ERROR.PREFIX} ${ERROR.COUNT}`);
    if (this.#duplication(numbers))
      throw new Error(`${ERROR.PREFIX} ${ERROR.DUPLICATION}`);
    if (isNaN(numbers.join('')))
      throw new Error(`${ERROR.PREFIX} ${ERROR.NUMBER_ONLY}`);
    if (this.#invalidNumbersRange(numbers))
      throw new Error(`${ERROR.PREFIX} ${ERROR.RANGE}`);
  }

  #invalidLength(numbers) {
    return numbers.length !== LOTTO.COUNT;
  }

  #duplication(numbers) {
    return new Set(numbers).size !== numbers.length;
  }

  #invalidNumbersRange(numbers) {
    return (
      numbers.filter((number) => this.#inRange(number)).length !==
      numbers.length
    );
  }

  #inRange(number) {
    return LOTTO.RANGE_MIN <= number && LOTTO.RANGE_MAX >= number;
  }

  addBonusNumber(bonusNumber) {
    const numTypeBonusNumber = Number(bonusNumber);
    this.#validateBonusNumber(numTypeBonusNumber);
    this.#numbers.push(numTypeBonusNumber);
  }

  #validateBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber))
      throw new Error(`${ERROR.PREFIX} ${ERROR.DUPLICATION_BONUS}`);
    if (isNaN(bonusNumber))
      throw new Error(`${ERROR.PREFIX} ${ERROR.NUMBER_ONLY}`);
    if (!this.#inRange(bonusNumber))
      throw new Error(`${ERROR.PREFIX} ${ERROR.RANGE}`);
  }

  getMatchCount(oneLottoNumbers) {
    const winningNumbersDeletedBonus = this.#numbers.slice(0, LOTTO.COUNT);

    return oneLottoNumbers.filter((lottoNumber) =>
      winningNumbersDeletedBonus.includes(lottoNumber)
    ).length;
  }

  #isBonus(oneLottoNumbers) {
    const bonusNumber = this.#numbers[LOTTO.COUNT];
    const matchCount = this.getMatchCount(oneLottoNumbers);
    return (
      oneLottoNumbers.includes(bonusNumber) && matchCount === LOTTO.COUNT - 1
    );
  }

  #initLottoResultStorage() {
    const storage = {};
    for (let key in MONEY) {
      storage[key] = 0;
    }
    return storage;
  }

  getLottoResult(allLottoNumbers) {
    const lottoResult = this.#initLottoResultStorage();
    allLottoNumbers.forEach((oneLottoNumbers) => {
      const matchCount = this.getMatchCount(oneLottoNumbers);
      if (this.#isBonus(oneLottoNumbers))
        lottoResult['5개 일치, 보너스 볼 일치']++;
      else if (matchCount >= 3) lottoResult[`${matchCount}개 일치`]++;
    });

    return lottoResult;
  }
}

module.exports = Lotto;
