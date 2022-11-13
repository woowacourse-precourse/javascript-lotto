const figureLotteryRank = (hit, bonus) => {
  if (hit === 6) {
    return 'FIRST';
  }
  if (hit === 5 && bonus === true) {
    return 'SECOND';
  }
  if (hit === 5) {
    return 'THIRD';
  }
  if (hit === 4) {
    return 'FOURTH';
  }
  if (hit === 3) {
    return 'FIFTH';
  }
  return null;
};
module.exports = { figureLotteryRank };
