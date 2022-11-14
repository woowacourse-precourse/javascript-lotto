const { Console, Random } = require("@woowacourse/mission-utils");
const checkValidation = require("./errors/checkValidation");
const Lotto = require("./Lotto");

class LottoList {
  constructor(money) {
    checkValidation.checkMoney(money);
    this.count = money / 1000;
    this.list = [];
    this.publish();
  }
  publish() {
    for (let num = 0; num < this.count; num++) {
      const newLotto = this.createNewLotto();
      this.list.push(newLotto);
    }
  }
  createNewLotto() {
    const newNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    checkValidation.checkNumberList(newNumbers);
    const { errorMessage } = checkValidation.checkNumberList(newNumbers);
    if (errorMessage) exitWithError(errorMessage);

    return new Lotto(newNumbers);
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
