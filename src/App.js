const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
const Text = require("./Text");

class App {
  constructor() {}

  play() {
    this.userPurchase();
  }

  userPurchase() {
    MissionUtils.Console.readline(
      `${Text.INPUT_TEXT.PRICE}\n`,
      (purchasePrice) => {
        Validation.prototype.validUserPurchase(purchasePrice);
        var user = this.purchasedLotto(purchasePrice);
        purchasePrice = +purchasePrice;
        this.lottoWinInput(user, purchasePrice);
      }
    );
  }
  lottoWinInput(user, purchasePrice) {
    MissionUtils.Console.readline(`${Text.INPUT_TEXT.WIN}\n`, (winNumber) => {
      var winNumbers = winNumber.split(",");
      new Lotto(winNumbers);
      Validation.prototype.validLottoNumber(winNumbers);
      this.lottoBonusInput(user, winNumbers, purchasePrice);
    });
  }

  lottoBonusInput(user, winNumbers, purchasePrice) {
    MissionUtils.Console.readline(
      `${Text.INPUT_TEXT.BONUS}\n`,
      (bonusNumber) => {
        var bonusNum = +bonusNumber;
        if (bonusNum < 1 || bonusNum > 45) {
          throw new Error(`${Text.ERROR_TEXT.LIMIT}`);
        }
        this.makeResult(user, winNumbers, bonusNumber, purchasePrice);
        MissionUtils.Console.close();
      }
    );
  }

  purchasedLotto(purchasePrice) {
    return this.countValidPurchase(purchasePrice);
  }

  countValidPurchase(purchasePrice) {
    if (!(purchasePrice % 1000)) {
      var validPurchaseNum = +(purchasePrice / 1000);
      MissionUtils.Console.print(
        `${validPurchaseNum}${Text.OTHER_TEXT.AMOUNT}`
      );
      return this.purchaseRandLotto(validPurchaseNum);
    }
    throw new Error(`${Text.ERROR_TEXT.DIVISION}`);
  }

  purchaseRandLotto(validPurchaseNum) {
    var randLottoNum = [];
    while (validPurchaseNum > 0) {
      randLottoNum.push(this.sortRandLotto());
      validPurchaseNum--;
    }
    this.giveWinNumber(randLottoNum);
    return randLottoNum;
  }

  sortRandLotto() {
    const randLottoNum = MissionUtils.Random.numbersInRange(1, 45, 6);
    return randLottoNum.sort((a, b) => a - b);
  }

  giveWinNumber(randLottoNum) {
    randLottoNum.forEach((lotto) => {
      const lottoList = this.convertLottoToString(lotto);
      MissionUtils.Console.print(lottoList);
    });
  }

  convertLottoToString(lotto) {
    var lottoString = "";
    for (let i = 0; i < 6; i++) {
      if (i === 0) {
        lottoString += "[";
        lottoString += `${lotto[i]}, `;
      } else if (i === 5) {
        lottoString += lotto[i];
        lottoString += "]";
      } else {
        lottoString += `${lotto[i]}, `;
      }
    }
    return lottoString;
  }

  makeResult(user, winNumbers, bonusNumber, purchasePrice) {
    Validation.prototype.isBonusInclude(winNumbers, bonusNumber);

    const winReward = {
      3: [0, 5000],
      4: [0, 50000],
      5: [0, 1500000],
      6: [0, 30000000],
      7: [0, 2000000000],
    };

    user.forEach((userNumber) => {
      winReward = this.makeWinReward(
        userNumber,
        winNumbers,
        bonusNumber,
        winReward
      );
    });
    this.printResult(winReward, purchasePrice);
  }

  makeWinReward(userNumber, winNumbers, bonusNumber, winReward) {
    var count = 0;
    for (let i = 0; i < winNumbers.length; i++) {
      var n = +winNumbers[i];
      if (userNumber.includes(n)) {
        count++;
      }
    }
    return this.winLottoCount(count, winReward, bonusNumber, userNumber);
  }

  winLottoCount(count, winReward, bonusNumber, userNumber) {
    if (count === 6) {
      winReward[count + 1][0] += 1;
    } else if (userNumber.includes(+bonusNumber) && count === 5) {
      winReward[count + 1][0] += 1;
    } else if (count >= 3) {
      winReward[count][0] += 1;
    }
    return winReward;
  }

  printResult(winReward, purchasePrice) {
    MissionUtils.Console.print(`${Text.OTHER_TEXT.RESULT}`);
    MissionUtils.Console.print(`${Text.OTHER_TEXT.BLANK}`);

    var i = 3;
    Text.WIN_TEXT.forEach((txt) => {
      MissionUtils.Console.print(`${txt} ${winReward[i][0]}개`);
      i++;
    });
    this.sumProfit(winReward, purchasePrice);
  }

  sumProfit(winReward, purchasePrice) {
    var total = 0;
    for (let i = 3; i <= 7; i++) {
      total += winReward[i][0] * winReward[i][1];
    }
    var profit = ((total / purchasePrice) * 100).toFixed(1);
    var result = profit
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    MissionUtils.Console.print(`총 수익률은 ${result}%입니다.`);
  }
}

const app = new App();
app.play();

module.exports = App;
