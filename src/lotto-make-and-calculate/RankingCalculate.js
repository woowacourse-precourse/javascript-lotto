class RankingCalculate {
  #lottoList;
  #answer;
  #bonus;

  constructor(lottoList, answer, bonus) {
    this.#lottoList = lottoList;
    this.#answer = answer;
    this.#bonus = Number(bonus);
    this.lottoCalculateList = lottoList;
    this.eachLotto;
    this.rankListCount = [0,0,0,0,0];
    this.rankList = this.rankCalculateStart();
  };

  rankCalculateStart() {
    const lottoListLength = this.#lottoList.length;
    
    for (let i = 0; i < lottoListLength; i++) {
      this.eachLotto = this.lottoCalculateList.pop();
      this.countMatchLength(this.eachLotto);
    };

    return this.rankListCount;
  };

  countMatchLength(eachLotto) {
    let matchLength = eachLotto.filter(eachNumber => this.#answer.includes(eachNumber)).length;
    this.countRanking(matchLength);
  };

  countRanking(matchLength) {
    switch (matchLength) {
      case 6:
        this.rankListCount[4] += 1;
        break;
      case 5:
        this.rankListCount[this.chechBonusAndFive()] += 1;
        break;
      case 4:
        this.rankListCount[1] += 1;
        break;
      case 3:
        this.rankListCount[0] += 1;
        break;
    };
  };

  chechBonusAndFive() {
    if (this.eachLotto.includes(this.#bonus)) {
      return 3;
    };
    
    return 2;
  };
};

module.exports = RankingCalculate;
