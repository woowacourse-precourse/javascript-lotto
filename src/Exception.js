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
};

module.exports = Exception;
