const { ERROR, LOTTO } = require('./Resource');

class LottoValidator {
  static checkLotto(numbers) {
    this.#checkLottoLength(numbers);
    this.#checkLottoNumbers(numbers);
    this.#checkLottoOverlap(numbers);
  }

  static checkMoney(number) {
    if (+number / LOTTO.LOTTO_COST == 0) {
      throw new Error(ERROR.MONEY_UNIT);
    }
  }

  static getLottoPuchaseNumber(money) {
    this.#checkDevideCost(money);
    return +money / LOTTO.LOTTO_COST;
  }

  static splitLottoNumbers(lottoNumbersString) {
    const lottoNumbers = lottoNumbersString
      .split(',')
      .map((lottoNumbers) => +lottoNumbers);
    this.checkLotto(lottoNumbers);
    return lottoNumbers;
  }

  static additionalNumber(lottoAdditinalNumber, lottoNumbers) {
    if (lottoNumbers.includes(lottoAdditinalNumber)) {
      throw new Error(ERROR.CONFLICT_ADDITIONIONL_NUMBER);
    }
    if (isNaN(+lottoAdditinalNumber)) {
      throw new Error(ERROR.OVER_ADDITINAL_NUMBER);
    }
    return +lottoAdditinalNumber;
  }

  static checkLottoWin(lottoInputDto, lottoPurchaseDto, lottoPrizeDto) {
    const lottoMatchCount = this.#getLottoMatchCount(
      lottoInputDto,
      lottoPurchaseDto,
    );
    const isLottoMatchAdditionalNumber = this.#checkLottoMatchAdditionalNumber(
      lottoInputDto.bonus,
      lottoPurchaseDto,
    );
    lottoPrizeDto.prizeCountUp(lottoMatchCount, isLottoMatchAdditionalNumber);
  }

  static #checkDevideCost(number) {
    if (number % LOTTO.LOTTO_COST !== 0) {
      throw new Error(ERROR.MONEY_UNIT);
    }
  }

  static #getLottoMatchCount(lottoInputDto, lottoPurchaseDto) {
    let count = 0;
    lottoPurchaseDto.numbers.forEach((number) => {
      if (lottoInputDto.numbers.includes(number)) {
        count += 1;
      }
    });
    return count;
  }
  static #checkLottoMatchAdditionalNumber(additionalNumber, lottoPurchaseDto) {
    return lottoPurchaseDto.numbers.includes(additionalNumber);
  }

  static #checkLottoOverlap(numbers) {
    if (new Set(numbers).size !== LOTTO.LOTTO_SIZE) {
      throw new Error(ERROR.LOTTO_OVERLAP);
    }
  }

  static #checkLottoLength(numbers) {
    if (numbers.length !== LOTTO.LOTTO_SIZE) {
      throw new Error(ERROR.LOTTO_LENGTH);
    }
  }

  static #checkLottoNumbers(numbers) {
    numbers.forEach((number) => {
      this.#checkLottoNumber(number);
    });
  }

  static #checkLottoNumber(number) {
    if (+number < LOTTO.LOTTO_SMALL_VALUE || +number > LOTTO.LOTTO_BIG_VALUE) {
      throw new Error(ERROR.LOTTO_RANGE);
    }
  }
}

module.exports = LottoValidator;
