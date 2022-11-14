const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoList {
  constructor(money) {
    this.validateMoney(money);
    this.count = money / 1000;
    this.list = [];
    this.publish();
  }
  throwError(money) {
    if (money < 1000) {
      throw new Error("[Error] 최소 구입 금액은 1000원입니다.");
    }
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 로또를 구입해야 합니다.");
    }
    if (isNaN(money)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
  }
  setLottoCount(money) {
    this.validateMoney(money);
    this.lottoCount = money / 1000;
    this.publishLotto(this.lottoCount);
  }
  publish() {
    for (let num = 0; num < this.count; num++) {
      const newLotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      this.list.push(newLotto);
    }
  }
  printCount() {
    Console.print(`\n${this.count}개를 구매했습니다.`);
  }
  printList() {
    this.list.forEach((lotto) => {
      lotto.printNumbers();
    });
  }
  getResult(winningNUmbers, bonusNumber) {
    const lottoResultList = [];

    this.list.forEach((lotto) => {
      lottoResultList.push(lotto.getResult(winningNUmbers, bonusNumber));
    });

    return lottoResultList.filter((result) => result);
  }
  printWinningList() {
    this.getLottoResult();
    const winningList = [
      "3개 일치 (5,000원)",
      "4개 일치 (50,000원)",
      "5개 일치 (1,500,000원)",
      "5개 일치 보너스 볼 일치 (30,000,000원)",
      "6개 일치 (2,000,000,000원)",
    ];
    winningList.forEach((winningList, idx) => {
      const winningCount = this.getWinningCount(lottoResultArray, idx);
      Console.print(`${winningList} - ${winningCount}개`);
    });
  }
  printLottoRate(lottoResultArray) {
    const lottoPrize = [5000, 50000, 1500000, 30000000, 2000000000];
    const finalPrize = lottoPrize.reduce((acc, cur, idx) => {
      const winningCount = this.getWinningCount(lottoResultArray, idx);

      return acc + cur * winningCount;
    }, 0);

    const purchaseMoney = this.count * 1000;
    const lottoRate = ((finalPrize / purchaseMoney) * 100).tpFixed(1);
    Console.print(`총 수익률은${lottoRate}%입니다.`);
  }
  getWinningCount(idx) {
    return lottoResultList.filter((result) => result === 5 - idx).length;
  }
}

module.exports = LottoList;
