const Validator = require('./Validator');
const { MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT } = require('./lottoOptions');

class LottoValidator extends Validator {
  constructor(
    lottoPrice,
    minNumber = MIN_NUMBER,
    maxNumber = MAX_NUMBER,
    numbersCount = NUMBER_COUNT,
  ) {
    super();
    this.lottoPrice = lottoPrice;
    this.minNumber = minNumber;
    this.maxNumber = maxNumber;
    this.numbersCount = numbersCount;
  }

  #isValidLottoNumber = (number) => {
    if (!this.isValidNumber(number)) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 숫자가 아닌 입력이 있습니다.`);
    }

    if (number < this.minNumber || number > this.maxNumber) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 로또 번호는 ${this.minNumber}부터 ${this.maxNumber} 사이의 숫자여야 합니다.`);
    }

    return true;
  };

  isValidBonusNumber(bonus, lottoNumbers) {
    this.isValidInput(bonus);
    this.isValidNumber(bonus);

    if (lottoNumbers.includes(Number(bonus))) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 로또 번호와 보너스 번호는 서로 달라야 합니다.`);
    }
  }

  isValidNumbersCount(numbers) {
    if (numbers.length !== this.numbersCount) {
      throw new Error(`[ERROR] 로또 번호는 ${this.numbersCount}개여야 합니다.`);
    }
  }

  isValidLottoNumbers(numbers) {
    this.isValidNumbersCount(numbers);
    numbers.every(this.#isValidLottoNumber);
    this.hasDuplicateNumberInNumbers(numbers);
  }

  isPurchasableMoney(money) {
    if (Number(money) < this.lottoPrice) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 구입 금액은 ${this.lottoPrice}원 이상이여야 합니다.`);
    }

    if (Number(money) % this.lottoPrice !== 0) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} ${this.lottoPrice}원 단위로 입력하여야 합니다. (최소 구매금액 : ${this.lottoPrice}원)`);
    }
  }

  isValidMoney(input) {
    this.isValidInput(input);
    this.isValidNumber(input);
    this.isPurchasableMoney(input);
  }
}

module.exports = LottoValidator;
