const { pickUniqueNumbersInRange } = require("@woowacourse/mission-utils").Random;

class Generator {
  #numberOfPurchaseAmount;
  #randomNumbers;

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
    this.#numberOfPurchaseAmount = purchaseAmount;
    const tempRandomNumbers = [];
    for (let i = 0; i < this.getNumberOfRandomNumbers(); i++) {
      tempRandomNumbers.push(pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => {
        return a - b;
      }));
    }
    this.#randomNumbers = [...tempRandomNumbers]
  }

  getNumberOfRandomNumbers() {
    return Number(this.#numberOfPurchaseAmount / 1000)
  }

  getRandomNumbers() {
    return this.#randomNumbers
  }
}

module.exports = Generator;
