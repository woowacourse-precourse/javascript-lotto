const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");
const LottoPurchase = require("../src/LottoPurchase");

class App {

  constructor() {
    this.lottoList;
    this.amount;
  }

  play() {}

  inputAmount() {
    MissionUtils.Console.readLine("구입 금액을 입력해 주세요.", (amount) => {
      amount = Number(amount);
      const lottoPurchase = new LottoPurchase(amount);
      this.lottoListPrint(lottoPurchase);
    })
  }

  lottoListPrint(lottoPurchase) {
    this.lottoList = lottoPurchase.lottoPublish();
    this.amount = lottoPurchase.amount;
    const count = this.amount / 1000;
    MissionUtils.Console.print(`${count}개를 구매했습니다.`)

    this.lottoList.forEach(lottoNumbers => {
      lottoNumbers = lottoNumbers.join(", ")
      MissionUtils.Console.print(`[${lottoNumbers}]`);
    })
  }

  inputWinningNumber() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (numbers) => {
      numbers = numbers.split(",").map(number => parseInt(number));
      this.inputBonusNumber(numbers);
    })
  }
}

const app = new App;
app.play();

module.exports = App;
