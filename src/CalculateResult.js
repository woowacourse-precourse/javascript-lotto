class CalculateResult {

  constructor(winningNumber, bonusNumber, buyLottoArray) {
    this.result = [0, 0, 0, 0, 0];
    this.calculateAll(winningNumber, bonusNumber, buyLottoArray);
  }

  calculateOne(winningNumber, bonusNumber, buyLotto) {
    const count = buyLotto.filter(element => winningNumber.includes(element)).length;
    const isInBonusNumber = buyLotto.includes(bonusNumber);
    
    if (count === 6) return 4;
    if (count === 5 && isInBonusNumber) return 3;
    if (count === 5) return 2;
    if (count === 4) return 1;
    if (count === 3) return 0;

    return -1;
  };

  calculateAll(winningNumber, bonusNumber, buyLottoArray) {
    buyLottoArray.forEach(buyLotto => {
      const checkCount = this.calculateOne(winningNumber, bonusNumber, buyLotto);
      
      if (checkCount === -1) return;
      this.result[checkCount] += 1;
    });
  };

};

module.exports = CalculateResult;