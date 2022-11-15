class Util {
  getUserRank(userLottoList, winNumbers, bonusNumber) {
    const result = this.compareUserNumberWithWinNumber(userLottoList, winNumbers, bonusNumber);
    const matchingWinNumber = result[0];
    const matchingBonusNumber = result[1];
    switch (matchingWinNumber) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return (matchingBonusNumber == 0) ? 3 : 2;
      case 6:
        return 1;
      default:
        return 0;
    }
  }

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