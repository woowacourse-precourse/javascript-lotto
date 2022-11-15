const MissionUtils = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE } = require("./constans/message");
const Lotto = require("./Lotto");
const Purchase = require("./Purchase");
const Winning = require("./Winning");
const Bonus = require("./Bonus");
const Validation = require("./Validation");

class App {
  constructor() {
    this.PurchaseInput = null;
    this.LottoNumber = [];
    this.WinningData = null;
    this.BonusData = null;
  }

  rateOfReturnPrint(rate) {
    const totalRate = ((rate / this.PurchaseInput.getPurchase()) * 100).toFixed(
      1
    );
    MissionUtils.Console.print(`총 수익률은 ${totalRate}%입니다.`);
    MissionUtils.Console.close();
  }

  resultPrint(hitsNumber) {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${hitsNumber.three}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${hitsNumber.four}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${hitsNumber.five}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${
        hitsNumber.five + hitsNumber.bonus
      }개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${hitsNumber.six}개`
    );
    this.rateOfReturnPrint(hitsNumber.money);
  }

  lottoMatch(winningAndBonustNumber) {
    let lottoMatch = [];
    this.LottoNumber.forEach((num) => {
      lottoMatch.push(
        num.filter((lottoNum) => {
          return winningAndBonustNumber.includes(lottoNum);
        })
      );
    });
    return lottoMatch;
  }

  lottoDraw(winningAndBonustNumber) {
    const lottoMatch = this.lottoMatch(winningAndBonustNumber);
    let hitsNumber = {
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      bonus: 0,
      money: 0,
    };
    lottoMatch.map((lotto) => {
      if (lotto.length === 3) {
        hitsNumber.three++;
        hitsNumber.money += 5000;
        return;
      }
      if (lotto.length === 4) {
        hitsNumber.four++;
        hitsNumber.money += 50000;
        return;
      }
      if (lotto.length === 5) {
        hitsNumber.five++;
        hitsNumber.money += 1500000;
        return;
      }
      if (
        lotto.length === 5 &&
        lotto.includes(parseInt(this.BonusData.getBonus(), 10))
      ) {
        hitsNumber.five++;
        hitsNumber.bonus++;
        hitsNumber.money += 30000000;
        return;
      }
      if (lotto.length === 6) {
        hitsNumber.six++;
        hitsNumber.money += 2000000000;
      }
    });
    this.resultPrint(hitsNumber);
  }

  numberCombine() {
    let winningAndBonustNumber =
      this.WinningData.getWinning() + "," + this.BonusData.getBonus();
    winningAndBonustNumber = winningAndBonustNumber
      .split(",")
      .map((num) => parseInt(num, 10));
    Validation.validWinningAndBonus(winningAndBonustNumber);
    this.lottoDraw(winningAndBonustNumber);
  }

  bonusNumber() {
    MissionUtils.Console.readLine(
      REQUEST_MESSAGE.BONUS_NUMBER,
      (BonusInput) => {
        this.BonusData = new Bonus(BonusInput);
      }
    );
    this.numberCombine();
  }

  winningNumber() {
    MissionUtils.Console.readLine(
      REQUEST_MESSAGE.WINNING_NUMBER,
      (winningInput) => {
        this.WinningData = new Winning(winningInput);
      }
    );
    this.bonusNumber();
  }

  lottoIssuance(count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    this.LottoNumber = Array.from({ length: count }, () => {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const ascending = randomNumber.sort((a, b) => a - b);
      new Lotto(ascending);
      MissionUtils.Console.print("[" + ascending.join(", ") + "]");
      return ascending;
    });

    this.winningNumber();
  }

  lottoPurchase() {
    MissionUtils.Console.readLine(
      REQUEST_MESSAGE.LOTTO_PURCHASE,
      (purchase) => {
        this.PurchaseInput = new Purchase(purchase);
        this.lottoIssuance(parseInt(purchase, 10) / 1000);
      }
    );
  }

  play() {
    this.lottoPurchase();
  }
}

module.exports = App;
