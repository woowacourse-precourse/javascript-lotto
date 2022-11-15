class Judgement {
  compare(lotto, winning) {
    const lottoCount = [];
    for (let i = 0; i < lotto.length; i++) {
      const matchNumber = lotto[i].filter((num) =>
        winning.includes(num)
      ).length;
      lottoCount.push(matchNumber);
    }
    return lottoCount;
  }
}

module.exports = Judgement;
