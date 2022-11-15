const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, OUPPUT_MESSAGE, LOTTO_PURCHASE_UNIT } = require("../constants/LottoConstants");
const Lotto = require("../src/Lotto");
const LottoPurchase = require("../src/LottoPurchase");

class App {

  constructor() {
    this.lottoList;
    this.amount;
  }

  play() {
    this.inputAmount();
    this.inputWinningNumber();
  }

  inputAmount() {
    Console.readLine(INPUT_MESSAGE.INPUT_AMOUNT, (amount) => {
      Console.print(INPUT_MESSAGE.INPUT_AMOUNT + "\n" + amount);
      amount = Number(amount);
      const lottoPurchase = new LottoPurchase(amount);
      this.lottoListPrint(lottoPurchase);
    })
  }

  lottoListPrint(lottoPurchase) {
    this.lottoList = lottoPurchase.lottoPublish();
    this.amount = lottoPurchase.amount;
    const count = (this.amount / LOTTO_PURCHASE_UNIT);

    Console.print(count + OUPPUT_MESSAGE.PURCHASE_COUNT);
    this.lottoList.forEach(lottoNumbers => {
      lottoNumbers = lottoNumbers.join(", ");
      Console.print(`[${lottoNumbers}]`);
    })
  }

  inputWinningNumber() {
    Console.readLine(INPUT_MESSAGE.INPUT_WINNING_NUMBERS, (numbers) => {
      Console.print(INPUT_MESSAGE.INPUT_WINNING_NUMBERS + "\n" + numbers);
      numbers = numbers.split(",").map(number => parseInt(number));
      this.inputBonusNumber(numbers);
    })
  }

  inputBonusNumber(numbers) {
    Console.readLine(INPUT_MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      Console.print(INPUT_MESSAGE.INPUT_BONUS_NUMBER + "\n" + bonusNumber);
      bonusNumber = Number(bonusNumber);
      const lotto = new Lotto(numbers, bonusNumber);
      this.LottoStatistics(lotto);
    })
  }

  LottoStatistics(lotto) {
    lotto.lottoCompareRepeat(this.lottoList);
    const winningNumber = lotto.winningNumbers;

    Console.print(OUPPUT_MESSAGE.WINNING_STATISTICS);
    Console.print(OUPPUT_MESSAGE.FIFTH_PLACE + winningNumber[0] + OUPPUT_MESSAGE.COUNT);
    Console.print(OUPPUT_MESSAGE.FOURTH_PLACE + winningNumber[1] + OUPPUT_MESSAGE.COUNT);
    Console.print(OUPPUT_MESSAGE.THIRD_PLACE + winningNumber[2] + OUPPUT_MESSAGE.COUNT);
    Console.print(OUPPUT_MESSAGE.SECOND_PLACE + winningNumber[3] + OUPPUT_MESSAGE.COUNT);
    Console.print(OUPPUT_MESSAGE.FIRST_PLACE + winningNumber[4] + OUPPUT_MESSAGE.COUNT);
    this.getRevenueRate(lotto);
  }

  getRevenueRate(lotto) {
    const revenue = lotto.getRevenue();
    const revenueRate = lotto.caculationRevenueRate(revenue, this.amount);

    Console.print(OUPPUT_MESSAGE.FRONT_REVENUE_RATE + revenueRate + OUPPUT_MESSAGE.BACK_REVENUE_RATE);
  }
}

const app = new App;
app.play();

module.exports = App;
