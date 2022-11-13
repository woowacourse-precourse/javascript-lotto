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
    const lottoStatisticArray = [];

    generateNumbers.forEach((array) => {
      let correctNumberCount = 0;
      winningNumbers.forEach((element) => {
        if (array.includes(element) !== -1) correctNumberCount++;
      });
      lottoStatisticArray[correctNumberCount]++;
    });

    return lottoStatisticArray.slice(3);
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
    const allLottoPrices = lottoStatisticArray.reduce((element, index) => {
      return element * winningLottoPrices[index];
    }, 1);
    const lottoYield = (allLottoPrices / payMoney) * 100;
    this.printLottoYield(lottoYield);
  }

  printLottoYield(lottoYield) {
    MissionUtils.Console.print(`총 수익률은 ${lottoYield}%입니다.`);
  }
}

module.exports = Customer;
