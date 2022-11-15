const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");
const LottoPurchase = require("../src/LottoPurchase");

class App {

  constructor() {
    this.lottoList;
    this.amount;
  }

  play() {
    this.inputAmount()
    this.inputWinningNumber()
  }

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

  inputBonusNumber(numbers) {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (bonusNumber) => {
      bonusNumber = Number(bonusNumber);
      const lotto = new Lotto(numbers, bonusNumber)
      this.LottoStatistics(lotto)
    })
  }

  LottoStatistics(lotto) {
    lotto.lottoCompareRepeat(this.lottoList);
    const winningNumber = lotto.winningNumbers;

    MissionUtils.Console.print(`당첨 통계\n---`)
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningNumber[0]}개`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningNumber[1]}개`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningNumber[2]}개`)
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningNumber[4]}개`)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winningNumber[3]}개`)
    this.getRevenueRate(lotto)
  }

  getRevenueRate(lotto) {
    const revenue = lotto.getRevenue();
    const revenueRate = lotto.caculationRevenueRate(revenue, this.amount)

    MissionUtils.Console.print(`총 수익률은 ${revenueRate}%입니다.`)
  }
}

const app = new App;
app.play();

module.exports = App;
