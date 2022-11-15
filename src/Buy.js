const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  BUY_MESSAGE,
  LOTTO_PRICE,
  RESULT_MESSAGE,
  WINNING_AMOUNT,
  RANK,
} = require("./constants");

class Buy {
  constructor() {
    this.purchase;
    this.lottoNumer = [];
    this.winngingNumber;
    this.winningCount = Array(5).fill(0);
  }
  print(message) {
    return Console.print(message);
  }
  lottoCount(money) {
    return Math.floor(money / LOTTO_PRICE);
  }
  printLottoCount(money) {
    const lottto = this.lottoCount(money);
    return this.print(`${lottto}${BUY_MESSAGE.BUY}`);
  }

  printLottoDetails(lottoNums) {
    let printNums = '"[' + lottoNums.join(", ").trim() + ']"';
    return this.print(printNums);
  }

  lottoPublish(money) {
    const buyLottoCount = Math.floor(money / LOTTO_PRICE);
    for (let index = 0; index < buyLottoCount; index++) {
      let lottoNums = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      this.lottoNumer.push(lottoNums);
      this.printLottoDetails(lottoNums);
    }
  }

  printResult(rank, winningCount) {
    // console.log(this.winningCount);
    return this.print(`${RESULT_MESSAGE[rank]} - ${winningCount}개`);
  }

  rankCount(lottoNumber, winningNumbers, bonus) {
    let sameCount = 0;
    let bonusCount = 0;
    // console.log(lottoNumber, winningNumbers, bonus);
    lottoNumber.forEach((number) =>
      winningNumbers.indexOf(number) > -1 ? (sameCount += 1) : (sameCount += 0)
    );
    if (lottoNumber.includes(bonus)) bonusCount += 1;
    // console.log(`same: ${sameCount}, bonus: ${bonusCount}`);
    return [sameCount, bonusCount];
  }

  rankCheck(bonus) {
    for (let index = 0; index < this.lottoNumer.length; index++) {
      let rank = 0;
      const [sameCount, bonusCount] = this.rankCount(
        this.lottoNumer[index],
        this.winngingNumber,
        bonus
      );
      const comparRank = `${sameCount}${bonusCount}`;
      rank = RANK[Number(comparRank)];
      rank === undefined ? (rank = 0) : rank;
      this.winningCount[rank - 1] += 1;
    }
    return this.lottoResult();
  }

  lottoResult() {
    for (let index = 4; index >= 0; index--) {
      this.printResult(index + 1, this.winningCount[index]);
    }
  }

  calcYield(winningCount, purchase) {
    let lottoYield = 0;
    for (let index = 0; index < winningCount.length; index++) {
      if (winningCount[index] > 0) {
        lottoYield += winningCount[index] * WINNING_AMOUNT[index + 1];
      }
    }
    const revenue = ((lottoYield / purchase) * 100).toFixed(1);
    return this.printYield(revenue);
  }

  printYield(lottoYield) {
    this.print(`총 수익률은 ${lottoYield}%입니다.`);
    Console.close();
  }
  validatePurchaseAmount(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위의 숫자이어야 합니다.");
    }
  }
  inputBonusNum() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonus) => {
      this.rankCheck(bonus);
      this.calcYield(this.winningCount, this.purchase);
    });
  }

  inputWinning() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (winning) => {
      const lotto = new Lotto(winning.split(",").map(Number));
      this.winngingNumber = winning.split(",").map(Number);
      this.inputBonusNum();
    });
  }
  start() {
    Console.readLine("로또 구입 금액을 입력하세요.\n", (money) => {
      this.validatePurchaseAmount(money);
      this.purchase = money;
      this.printLottoCount(money);
      this.lottoPublish(this.purchase);
      this.inputWinning();
    });
  }
}

module.exports = Buy;
