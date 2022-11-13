const generateRandomNumber = require("./GenerateRandomNumber");

class UserLottos {
  constructor() {
    this.count = 0;
    this.numbers = [];
  }

  getNumbers(purchaseAmount) {
    this.count = this.getCount(purchaseAmount);
    this.numbers.push(generateRandomNumber.generate());

    return this.numbers;
  }

  getCount(purchaseAmount) {
    return purchaseAmount / 1000;
  }
}

module.exports = Lottos;
