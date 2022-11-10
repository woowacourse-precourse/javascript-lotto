class LottoResultCheck {
  constructor() {
    this.randomSevenNumbers = this.makeLottoWinningNumber();
    //상수화 필요
    this.winningNumbers = this.randomSevenNumbers.slice(0, 6);
    this.bonusNumber = this.randomSevenNumbers[6];
    this.resultArray = [];
  }

  makeLottoWinningNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 7);
  }

  winningCheck(lottonumbers, winningNumbers, bonusNumber) {
    //상수화 필요
    const COUNT_OF_CORRECT_NUMBERS = lottonumbers.filter((number) => winningNumbers.includes(number)).length;
    if (COUNT_OF_CORRECT_NUMBERS === 3) return 5;
    if (COUNT_OF_CORRECT_NUMBERS === 4) return 4;
    if (COUNT_OF_CORRECT_NUMBERS === 5) return 3;
    if (COUNT_OF_CORRECT_NUMBERS === 5 && lottonumbers.includes(bonusNumber)) return 2;
    if (COUNT_OF_CORRECT_NUMBERS === 6) return 1;
  }

  lottoRankingsCount(rankingsArray, ranking) {
    //상수화 필요.
    if (ranking === 1) rankingsArray[0]++;
    if (ranking === 2) rankingsArray[1]++;
    if (ranking === 3) rankingsArray[2]++;
    if (ranking === 4) rankingsArray[3]++;
    if (ranking === 5) rankingsArray[4]++;
  }

  getTotalWinningMoney(rankingsArray) {
    const PRIZE_LIST = [2000000000, 30000000, 1500000, 50000, 5000];
    const INITIAL_VALUE = 0;
    return rankingsArray.reduce(
      (accumulator, currentValue, currentIndex) => accumulator + currentValue * PRIZE_LIST[currentIndex],
      INITIAL_VALUE
    );
  }

  getEarningsRate(totalWinningMoney, userMoney) {
    //%로 맞추기 위한 100도 상수화 해야하나?
    const earningsRate = ((totalWinningMoney / userMoney) * 100).toFixed(2);
    MissionUtils.Console.print(earningsRate);
  }
}
