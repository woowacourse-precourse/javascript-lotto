class ValidationCheck {
  isMoneyValid(money) {
    if (isNaN(money)) return false;
    if (!/[0-9]{4,}/.test(money)) return false;
    if (parseInt(money) % 1000 !== 0) return false;
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

  isBonusNumberValid(number, lottoNumbers) {
    if (+number < 1 || +number > 45) return false;
    if (lottoNumbers.includes(number)) return false;
    return true;
  }
}
