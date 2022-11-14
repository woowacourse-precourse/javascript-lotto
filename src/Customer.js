const MissionUtils = require("@woowacourse/mission-utils");

class Customer {
  #lottoInstance;

  constructor(lottoInstance) {
    this.lottoInstance = lottoInstance;
  }

  set buyLotto(lottos) {
    this.lottoInstance = lottos;
  }

  get showLotto() {
    return this.lottoInstance;
  }

  payMoney() {
    const money = MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.\n",
      (money) => {
        return money;
      }
    );
    const paidMoney = parseInt(money);
    this.isMoneyValidate(paidMoney);
    return paidMoney;
  }

  isMoneyValidate(money) {
    if (money % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액이 천원 단위가 아닙니다");
  }

  getLottoStatistic() {
    const winningNumbers = [];
    const generateNumbers = [];

    const lottoStatisticArray = this.analyzeLottoStatistic(
      winningNumbers,
      generateNumbers
    );

    this.printLottoStatistic(lottoStatisticArray);
    this.calculateLottoYield(lottoStatisticArray);
  }

  analyzeLottoStatistic(winningNumbers, generateNumbers) {
    let lottoStatisticArray = [0, 0, 0, 0, 0, 0, 0];
    let correct5NumberWithBonus = 0;
    const FIVE_NUMBERS_WITH_BONUS = 7;

    generateNumbers.forEach((array) => {
      const result = this.findWinningNumbers(winningNumbers, array);
      if (result !== FIVE_NUMBERS_WITH_BONUS) lottoStatisticArray[result]++;
      if (result === FIVE_NUMBERS_WITH_BONUS) correct5NumberWithBonus++;
    });

    const lottoResult = this.makeLottoStatisticArray(
      lottoStatisticArray,
      correct5NumberWithBonus
    );

    return lottoResult;
  }

  makeLottoStatisticArray(lottoStatisticArray, correct5NumberWithBonus) {
    const lottoResult = lottoStatisticArray.slice(3, 6);
    lottoResult.push(
      correct5NumberWithBonus,
      lottoStatisticArray[lottoStatisticArray.length - 1]
    );

    return lottoResult;
  }

  findWinningNumbers(winningNumbers, array) {
    let bonusNumber = winningNumbers[winningNumbers.length - 1];
    let correctNumberCount = 0;
    let correctBonus = false;

    winningNumbers.forEach((element, index) => {
      if (array.includes(element)) correctNumberCount++;
    });

    if (array.includes(bonusNumber)) correctBonus = true;

    if (correctBonus && correctNumberCount === 5) return 7;
    return correctNumberCount;
  }

  printLottoStatistic(lottoStatisticArray) {
    const winningLottoPrices = [5000, 50000, 1500000, 30000000, 2000000000];
    lottoStatisticArray.forEach((element, index) => {
      MissionUtils.Console.print(
        `${index + 3}개 일치 (${winningLottoPrices[index]}원) - ${element}개`
      );
    });
  }

  calculateLottoYield(lottoStatisticArray, payMoney) {
    const winningLottoPrices = [5000, 50000, 1500000, 30000000, 2000000000];
    const allLottoPrices = lottoStatisticArray.reduce((pre, cur, index) => {
      return pre + cur * winningLottoPrices[index];
    }, 0);
    const lottoYield = (allLottoPrices / payMoney) * 100;
    this.printLottoYield(lottoYield);
    return lottoYield;
  }

  printLottoYield(lottoYield) {
    MissionUtils.Console.print(`총 수익률은 ${lottoYield}%입니다.`);
  }
}

module.exports = Customer;
