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
  }

  isMoneyValid(numbers) {
    if (isNaN(numbers)) return false;
    if (!/[0-9]{4,}/.test(numbers)) return false;
    if (parseInt(numbers) % 1000 !== 0) return false;
    return true;
  }

  isLottoNumberInputValid(numbers) {
    const NUMBERS_FROM_INPUT = numbers.split(",");
    if (/[^\d,]/g.test(numbers)) return false;
    if (NUMBERS_FROM_INPUT.length !== 6) return false;
    if (NUMBERS_FROM_INPUT.find((arrayElement) => parseInt(arrayElement) < 1 || parseInt(arrayElement) > 45))
      return false;
    return true;
  }

  isBonusNumberValid(bonusNumber) {
    if (+bonusNumber < 1 || +bonusNumber > 45) return false;
    if (numbers.includes(bonusNumber)) return false;
    return true;
  }
}

module.exports = Lotto;
