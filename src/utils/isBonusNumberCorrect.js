const isBonusNumberCorrect = (bonusNumber, answer) => {
  return answer.includes(bonusNumber) ? 1 : 0;
};

module.exports = isBonusNumberCorrect;
