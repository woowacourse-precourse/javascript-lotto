const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Purchase = require("./Purchase");
const Winning = require("./Winning");
const Bonus = require("./Bonus");
class App {
  constructor() {
    // 로또 번호
    this.PurchaseInput = null;
    this.LottoNumber = null;
    this.WinningData = null;
    this.BonusData = null;
  }
  rateOfReturn = (rate) => {
    console.log(
      `총 수익률은 ${(rate / this.PurchaseInput.getPurchase()) * 100}%입니다.`
    );
  };
  lottoDraw = () => {
    let lottoMatch = [];
    let winningAndBonustNumber =
      this.WinningData.getWinning() + "," + this.BonusData.getBonus();
    winningAndBonustNumber = winningAndBonustNumber
      .split(",")
      .map((num) => parseInt(num, 10));

    this.LottoNumber.forEach((num) => {
      lottoMatch.push(
        num.getNumbers().filter((lottoNum) => {
          return winningAndBonustNumber.includes(lottoNum);
        })
      );
    });
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
    this.rateOfReturn(hitsNumber.money);
  };
  bonusNumber = () => {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.",
      (BonusInput) => {
        this.BonusData = new Bonus(BonusInput);
        MissionUtils.Console.print(BonusInput);
      }
    );
    this.lottoDraw();
  };
  winningNumber = () => {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (winningInput) => {
        this.WinningData = new Winning(winningInput);
        MissionUtils.Console.print(winningInput);
      }
    );
    this.bonusNumber();
  };
  lottoIssuance = (count) => {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    this.LottoNumber = Array.from({ length: count }, () => {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const ascending = randomNumber.sort((a, b) => a - b);
      return new Lotto(ascending);
    });
    this.LottoNumber.forEach((num) => {
      MissionUtils.Console.print(num.getNumbers());
    });
    this.winningNumber();
  };
  lottoPurchase = () => {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (purchase) => {
      this.PurchaseInput = new Purchase(purchase);
      this.lottoIssuance(parseInt(purchase, 10) / 1000);
    });
  };
  play() {
    this.lottoPurchase();
  }
}

module.exports = App;
