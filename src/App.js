const { Console } = require("@woowacourse/mission-utils");
const InfoMessages = require("./constants/InfoMessages");
const LottoShop = require("./LottoShop.js");
const Lotto = require("./Lotto.js");
const PrizeCalculator = require("./PrizeCalculator.js");

class App {
  play() {
    Console.readLine(InfoMessages.ENTER_PURCHASE_AMOUNT, (money) => {
      this.money = money;
      this.getUserLottos();
      this.setWinningNums();
    });
  }

  getUserLottos() {
    const lottoShop = new LottoShop(this.money);
    this.userLottosArr = lottoShop.getLottos();
    this.lottosQuantity = lottoShop.getLottosQuantity();
    Console.print("\n" + this.lottosQuantity + InfoMessages.PURCHASE_QUANTITY);
    this.userLottosArr.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  setWinningNums() {
    Console.readLine(InfoMessages.ENTER_WINNING_NUM, (winningNumsInput) => {
      const winningNumsInputArr = winningNumsInput.split(",").map(Number);
      this.lotto = new Lotto(winningNumsInputArr);
      this.winningNums = winningNumsInputArr;
      this.setWinningBonusNum();
    });
  }

  setWinningBonusNum() {
    Console.readLine(InfoMessages.ENTER_BONUS_NUM, (winningBonusNumInput) => {
      this.lotto.validateBonusNum(Number(winningBonusNumInput));
      this.winningBonusNum = Number(winningBonusNumInput);

      this.showPrizeStatistics();
    });
  }

  showPrizeStatistics() {
    this.PrizeCalculator = new PrizeCalculator(
      this.money,
      this.userLottosArr,
      this.winningNums,
      this.winningBonusNum
    );

    const [
      cntOfFifthPlace,
      cntOfourthPlace,
      cntOfThirdPlace,
      cntOfSecondPlace,
      cntOfFirstPlace,
    ] = this.PrizeCalculator.countWinnings();
    const rateOfReturn = this.PrizeCalculator.caculateYield();

    Console.print(InfoMessages.WINNING_STATISTICS_GUIDE);
    Console.print(InfoMessages.FIFTH_PLACE + cntOfFifthPlace + "개");
    Console.print(InfoMessages.FOURTH_PLACE + cntOfourthPlace + "개");
    Console.print(InfoMessages.THIRD_PLACE + cntOfThirdPlace + "개");
    Console.print(InfoMessages.SECOND_PLACE + cntOfSecondPlace + "개");
    Console.print(InfoMessages.FIRST_PLACE + cntOfFirstPlace + "개");
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
    Console.close();
  }
}

module.exports = App;
