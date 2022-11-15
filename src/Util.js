class Util {
  constructor(){}

  compareUserNumberWithWinNumber(userLottoList, winNumbers, bonusNumber) {
    userLottoList.forEach(userLotto => {
      matchingWinNumber = this.countUserNumberMatchingWithWinNumber(userLotto, winNumbers)
      matchingBonusNumber = this.countUserNumberMatchingWithBonusNumber(userLotto, bonusNumber);
    });
    return [matchingWinNumber, matchingBonusNumber];
  }
  
  countUserNumberMatchingWithWinNumber(userLotto, winNumbers) {
    let count = 0;
    userLotto.forEach(number => {
      if (winNumbers.includes(number)) {
        count++;
      }
    });
    return count;
  }
  
  countUserNumberMatchingWithBonusNumber(userLotto, bonusNumber) {
    if (userLotto.includes(bonusNumber)) {
      return 1;
    }
    return 0;
  }
}

module.exports = Util;