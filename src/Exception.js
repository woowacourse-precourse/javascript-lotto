const Exception = {
  checkUnit(money) {
    if (money % 1000 === 0) return true;
    return false;
  },
  checkType(money) {
    if (Number.isInteger(Number(money))) return true;
    return false;
  },
  checkRange(money) {
    if (money >= 1000) return true;
    return false;
  },
  checkLottoLength(numbers) {
    return numbers.length === 6;
  },
  checkLottoDuplicate(numbers) {
    return numbers.length === [...new Set(numbers)].length;
  },
  checkLottoRange(numbers) {
    return numbers.every(number => number >= 1 && number <= 45);
  },
  checkLottoType(numbers) {
    const inputRule = /^[1-9]+(,[1-9]+)+$/;
    return inputRule.test(numbers);
  },
};

module.exports = Exception;
