const checkMyNumber = (list, winNumber, score, bonusNumber) => {
  let correctCount = 0;
  if (JSON.stringify(list) === JSON.stringify(winNumber)) {
    return (score[2000000000] += 1);
  }
  list.map((number) => {
    if (winNumber.includes(number)) {
      return (correctCount += 1);
    }
  });
  if (correctCount === 0 || correctCount === 1 || correctCount === 2) {
    return (score[0] += 1);
  }
  if (correctCount === 3) {
    return (score[5000] += 1);
  }
  if (correctCount === 4) {
    return (score[50000] += 1);
  }
  if (correctCount === 5) {
    const difference = list.filter((x) => !winNumber.includes(x));
    return difference[difference.length - 1] !== bonusNumber
      ? (score[1500000] += 1)
      : (score[30000000] += 1);
  }
};
module.exports = { checkMyNumber };
