const { Random } = require("@woowacourse/mission-utils");

class Generator {
  #purchaseAmount;
  #randomNumbers = [];

  validatePurchaseAmount(purchaseAmount) {
    if (/[^0-9]/g.test(purchaseAmount)) {
      throw new Error("[ERROR] 구입금액은 숫자로만 입력해야 합니다.");
    } 
    
    if (purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.");
    } 
  }
  
  generateRandomNumbers(purchaseAmount) {
    this.validatePurchaseAmount(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
    for (let i = 0; i < this.getNumberOfRandomNumbers(); i++) {
      this.#randomNumbers.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
  }

  getNumberOfRandomNumbers() {
    return Number(this.#purchaseAmount / 1000)
  }

  getRandomNumbers() {
    return this.#randomNumbers
  }
}

module.exports = Generator;
