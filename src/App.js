const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.buyPrice;
    this.buyAmount;
    this.lottoArray = [];
    this.winningNumber;
    this.collectNumber;
    this.matchNumber = [0, 0, 0, 0, 0];
    this.yield = 0;

    this.winningMoney = [5000, 50000, 1500000, 30000000, 2000000000];
  }
  play() {
    this.gameStart();
  }

  gameStart() {
    this.getBuyPrice();
  }

  getBuyPrice() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요. \n", (price) => {
      this.buyPrice = price;
      this.priceValidate(this.buyPrice);
      this.createLottoNumber();
    });
  }

  priceValidate(price) {
    if (price % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.");
    }
  }

  bonusValidate(bonus) {
    if (bonus.length > 1 || bonus.length < 1) {
      throw new Error("[ERROR] 보너스 번호가 한 자리가 아닙니다.");
    }
  }

  buyAmountCalculate() {
    this.buyAmount = this.buyPrice / 1000;
    MissionUtils.Console.print("\n" + this.buyAmount + "개를 구매했습니다.");
  }

  createLottoNumber() {
    this.buyAmountCalculate();
    for (let index = 0; index < this.buyAmount; index++) {
      this.lottoArray.push(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      );
    }
    this.sortLottoNumber();
    this.getWinningNumber();
  }

  sortLottoNumber() {
    this.lottoArray.map((data) => {
      data.sort((a, b) => {
        return a - b;
      });
      MissionUtils.Console.print(`[${data.join(", ")}]`);
    });
  }

  getWinningNumber() {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해 주세요. \n",
      (number) => {
        this.winningNumber = this.splitWinningNumber(number);
        this.winningNumber.sort((a, b) => {
          return a - b;
        });
        new Lotto(this.winningNumber);
        this.getBonusNumber();
      }
    );
  }

  getBonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (number) => {
        this.bonusValidate(number);
        this.compareLottoNumber();
        MissionUtils.Console.close();
      }
    );
  }

  collectLottoNumber(numbers) {
    const collectLength = this.collectNumber.length;
    const collectBonus = numbers.includes(this.bonusNumber);
    if (collectLength >= 3 && collectLength <= 5 && !collectBonus) {
      this.matchNumber[collectLength - 3]++;
    }
    if (collectLength === 5 && collectBonus) {
      this.matchNumber[3]++;
    }
    if (this.collectNumber.length === 6) {
      this.matchNumber[4]++;
    }
  }

  winningStatsResult() {
    MissionUtils.Console.print("\n당첨 통계\n---");

    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.matchNumber[0]}개`);
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${this.matchNumber[1]}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.matchNumber[2]}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.matchNumber[3]}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.matchNumber[4]}개`
    );
  }

  yieldResult() {
    for (let index = 0; index < 5; index++) {
      this.yield += this.matchNumber[index] * this.winningMoney[index];
    }
    MissionUtils.Console.print(
      `총 수익률은 ${(
        (this.yield / (this.lottoArray.length * 1000)) *
        100
      ).toFixed(1)}%입니다.`
    );
  }

  compareLottoNumber() {
    this.lottoArray.map((numbers) => {
      this.collectNumber = numbers.filter((samenumber) =>
        this.winningNumber.includes(samenumber)
      );
      this.collectLottoNumber(numbers);
    });
    this.winningStatsResult();
    this.yieldResult();
  }

  splitWinningNumber(number) {
    return number.split(",").map(Number);
  }
}

const app = new App();
app.play();

module.exports = App;
