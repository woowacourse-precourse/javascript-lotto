class Validator {
  checkMoneyValid(money) {
    return money % 1000 === 0;
  }
}

module.exports = Validator;
