const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./Message");
const DetectError = require("./DetectError");


class App {
  constructor() {
  }

  play() {
    this.userInput();
  }

  userInput() {
    MissionUtils.Console.readLine(`${Message.INPUT_MESSAGE.PURCHASE}\n`, (userMoney) => {
      DetectError.prototype.checkUserInput(userMoney);
      const user = this.lottoPurchase(userMoney);
      userMoney = parseInt(userMoney);
      this.prizeInput(user, userMoney);
    });
  }

  prizeInput(user, userMoney) {
    MissionUtils.Console.readLine(`${Message.INPUT_MESSAGE.PRIZE}\n`, (prizeNumber) => {
      const przNum = prizeNumber.split(',');
      new Lotto(przNum);
      DetectError.prototype.checkPrizNumber(przNum);     
      this.bonusInput(user, przNum, userMoney);
    });
  }

  bonusInput(user, przNum, userMoney) {
    MissionUtils.Console.readLine(`${Message.INPUT_MESSAGE.BONUS}\n`, (bonusNumber) => {
      const bnsNum = parseInt(bonusNumber);
      if (bnsNum < 1 || bnsNum > 45) {
        throw new Error(`${Message.ERROR_MESSAGE.RANGE}`);
      }
      this.caculateResult(user, przNum, bonusNumber, userMoney);
      MissionUtils.Console.close();
    });
  }

  lottoPurchase(userMoney) {
    return this.numberOfAvailablePurchase(userMoney);
  }

  numberOfAvailablePurchase(userMoney) {
    if (!(userMoney % 1000)) {
      let availablePurchaseNumber = parseInt(userMoney / 1000);
      MissionUtils.Console.print(`${availablePurchaseNumber}${Message.SUB_MESSAGE.AMOUNT}`);
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

  caculateResult(user, prize, bonus, userMoney) {
    DetectError.prototype.isBonusInPrize(prize, bonus);

    let lottoPrize = {
      3: [0, 5000],
      4: [0, 50000],
      5: [0, 1500000],
      6: [0, 30000000],
      7: [0, 2000000000],
    };

    user.forEach((userNum) => {
      lottoPrize = this.makeLottoPrize(userNum, prize, bonus, lottoPrize);
    });
    this.showResult(lottoPrize, userMoney);
  }

  makeLottoPrize(userNum, prize, bonus, lottoPrize) {
    let cnt = 0;
    for (let i = 0; i < prize.length; i++) {
      const n = parseInt(prize[i]);
      if (userNum.includes(n)) {
        cnt++;
      }
    }

    return this.addCountInLottoPrize(cnt, lottoPrize, bonus, userNum);
      
  }

  addCountInLottoPrize(cnt, lottoPrize, bonus, userNum) {
    if (cnt === 6) {
      lottoPrize[cnt+1][0] += 1;
    }
    else if (userNum.includes(parseInt(bonus)) && cnt === 5) {
      lottoPrize[cnt + 1][0] += 1;
    } 
    else if (cnt >= 3) {
      lottoPrize[cnt][0] += 1;
    }
    return lottoPrize;
  }

  showResult(lottoPrize, userMoney) {
    MissionUtils.Console.print(`${Message.SUB_MESSAGE.RESULT}`);
    MissionUtils.Console.print(`${Message.SUB_MESSAGE.BLANK}`);

    let i = 3;
    Message.WINNING_RESULT.forEach((msg) => {
      MissionUtils.Console.print(`${msg} ${lottoPrize[i][0]}개`);
      i++;
    })

    this.totalRevenue(lottoPrize, userMoney);
  }

  totalRevenue(lottoPrize, userMoney) {
    let sum = 0;
    for (let i = 3; i <= 7; i++) {
      sum += lottoPrize[i][0] * lottoPrize[i][1];
    }
    let revenue = ((sum / userMoney) * 100).toFixed(1);
    let result = revenue.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    MissionUtils.Console.print(`총 수익률은 ${result}%입니다.`);
  }
}

const game = new App();
game.play();

module.exports = App;
