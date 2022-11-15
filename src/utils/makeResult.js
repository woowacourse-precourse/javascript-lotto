const makeResult = (result) => {
  const hitResult = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < result.stats.length; i++) {
    if (result.stats[i] === 3) {
      hitResult[0]++;
    }
    if (result.stats[i] === 4) {
      hitResult[1]++;
    }
    if (result.stats[i] === 6 && result.bonusHit[i]) {
      hitResult[3]++;
    }
    if (result.stats[i] === 5) {
      hitResult[2]++;
    }
    if (result.stats[i] === 6 && !result.bonusHit[i]) {
      hitResult[4]++;
    }
  }
  console.log(result.stats, result.bonusHit, hitResult);
  return { hitResult };
};

module.exports = makeResult;
