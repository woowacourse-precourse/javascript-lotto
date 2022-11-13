const verifyValidBonusNumber = (bonusNumber, answer) => {
  return answer.includes(bonusNumber) ? 1 : 0;
};

module.exports = verifyValidBonusNumber;
