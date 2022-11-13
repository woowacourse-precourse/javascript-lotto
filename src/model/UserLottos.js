const generateRandomNumber = require("./GenerateRandomNumber");

class UserLottos {
  constructor(purchaseAmount) {
    this.count = purchaseAmount / 1000;
    this.lottos = [];
  }

  createLottos(purchaseAmount) {
    this.lottos.push(generateRandomNumber.generate());
  }
}

module.exports = Lottos;
