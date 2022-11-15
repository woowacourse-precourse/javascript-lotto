class BackLogic {
  splitNumber(number, flag) {
    return number.split(flag).map((item) => {
      return parseInt(item);
    });
  }
}

module.exports = BackLogic;
