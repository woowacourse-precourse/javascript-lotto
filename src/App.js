const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./Message");
const DetectError = require("./DetectError");


class App {
  constructor() {
    this.lottoPrize = {
      3: [0, 5000],
      4: [0, 50000],
      5: [0, 1500000],
      6: [0, 30000000],
      7: [0, 2000000000],
    };
    this.purchaseMoney;
  }

  play() {
    this.userInput();
  }

  userInput() {
    MissionUtils.Console.readLine(`${Message.INPUT_MESSAGE.PURCHASE}\n`, (userMoney) => {
      this.purchaseMoney = userMoney;
      const user = this.lottoPurchase(userMoney);
      this.prizeInput(user);
    });
  }

  prizeInput(user) {
    MissionUtils.Console.readLine(`\n${Message.INPUT_MESSAGE.PRIZE}\n`, (prizeNumber) => {
      const przNum = prizeNumber.split(',');
      new Lotto(przNum);
      this.bonusInput(user, przNum);
    });
  }

  bonusInput(user, przNum) {
    MissionUtils.Console.readLine(`\n${Message.INPUT_MESSAGE.BONUS}\n`, (bonusNumber) => {
      const bnsNum = parseInt(bonusNumber);
      if (bnsNum < 1 || bnsNum > 45) {
        throw new Error(`${Message.ERROR_MESSAGE.RANGE}`);
      }
      this.caculateResult(user, przNum, bonusNumber);
      this.showResult();
      MissionUtils.Console.close();
    });
  }

  lottoPurchase(userMoney) {
    return this.numberOfAvailablePurchase(userMoney);
  }

  numberOfAvailablePurchase(userMoney) {
    if (!(userMoney % 1000)) {
      let availablePurchaseNumber = parseInt(userMoney / 1000);
      MissionUtils.Console.print(`\n${availablePurchaseNumber}${Message.SUB_MESSAGE.AMOUNT}`);
      return this.buyRandomLotto(availablePurchaseNumber);
    }
    throw new Error(`${Message.ERROR_MESSAGE.DIVIDED}`);
  }

  buyRandomLotto(availablePurchaseNumber) {
    let randomLotto = [];
    while (availablePurchaseNumber > 0) {
      randomLotto.push(this.makeRandomLotto());
      availablePurchaseNumber--;
    }
    this.showLottoList(randomLotto);
    return randomLotto;
  }

  makeRandomLotto() {
    const randomLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomLotto.sort((a, b) => a - b);
  }

  showLottoList(randomLotto) {
    randomLotto.forEach((element) => {
      const answer = this.makeLottoString(element);
      MissionUtils.Console.print(answer);
    });
  }

  makeLottoString(element) {
    let answer = "";
    for (let i = 0; i < 6; i++) {
      if (i === 0) {
        answer += "[";
        answer += `${element[i]}, `;
      } else if (i === 5) {
        answer += element[i];
        answer += "]";
      } else {
        answer += `${element[i]}, `;
      }
    }
    return answer;
  }

  isBonusInPrize(prize, bonus) {
    if (prize.includes(bonus)) {
      throw new Error(`${Message.ERROR_MESSAGE.OVERLAP}`);
    }
  }


  caculateResult(user, prize, bonus) {
    // this.isBonusInPrize(prize, bonus);
    DetectError.prototype.isBonusInPrize(prize, bonus);

    user.forEach((element) => {
      this.makeLottoPrize(element, prize, bonus);
    });
  }

  makeLottoPrize(element, prize, bonus) {
    let cnt = 0;
    for (let i = 0; i < prize.length; i++) {
      const n = parseInt(prize[i]);
      if (element.includes(n)) {
        cnt++;
      }
    }

    if (element.includes(bonus) || cnt >= 5) {
      this.lottoPrize[cnt + 1][0] += 1;
    }else if (cnt >= 3) {
      this.lottoPrize[cnt][0] += 1;
    }
  }

  showResult() {
    MissionUtils.Console.print(`\n${Message.SUB_MESSAGE.RESULT}`);
    MissionUtils.Console.print(`${Message.SUB_MESSAGE.BLANK}`);

    let i = 3;
    Message.WINNING_RESULT.forEach((msg) => {
      MissionUtils.Console.print(`${msg} ${this.lottoPrize[i][0]}개`);
      i++;
    })

    let sum = this.totalRevenue();
    let revenue = (sum / this.purchaseMoney) * 100;
    let total = parseFloat(revenue.toFixed(2));

    MissionUtils.Console.print(
      `총 수익률은 ${total}%입니다.`
    );
  }

  totalRevenue() {
    let sum = 0;
    for (let i = 3; i <= 7; i++) {
      sum += this.lottoPrize[i][0] * this.lottoPrize[i][1];
    }
    return sum;
  }
}

const game = new App();
game.play();

module.exports = App;
