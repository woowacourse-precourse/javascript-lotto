const examineBonusNumber = (bonusNum, answer) => {
  return answer.includes(bonusNum) ? 1 : 0;
};

module.exports = examineBonusNumber;
