const validateBonusNumber = (bonusNum, winLotto) => {
    if(bonusNum.length < 1 || 2 < bonusNum.length) {
      throw new Error("[ERROR]");
    }
    if(Number(bonusNum) < 1 || 45 < Number(bonusNum)) {
      throw new Error("[ERROR");
    }
    if(winLotto.includes(bonusNum)) {
      throw new Error("[ERROR]");
    }
}

module.exports = { validateBonusNumber };