const MissionUtils = require("@woowacourse/mission-utils");

const Lotto = require("./Lotto");

const FIRST_LOTTO = 200000000;
const SECOND_LOTTO = 30000000;
const THIRD_LOTTO = 1500000;
const FOURTH_LOTTO = 50000;
const FIFTH_LOTTO = 5000;

class App {
  play() {
    const countOfLotto = this.buyLotto();
    const myLotto = this.generateLottoNumber(countOfLotto);
    const winningNums = this.getWinningNums();
    this.calLottoProfit(myLotto, winningNums);
  }

  buyLotto() {
    let money = 0;

    MissionUtils.Console.readLine("구매금액을 입력해주세요. \n >", (answer) => {
      money = Number(answer);
    });
    MissionUtils.Console.close();
    this.isValidMoney(money);

    return parseInt(money / 1000);
  }

  isValidMoney(money) {
    if (Number.isNaN(money)) {
      throw (`[ERROR] 입력 금액이 숫자형태가 아닙니다.`);
    }

    if (money < 1000) {
      throw `[ERROR] 로또 한장의 가격은 1000원입니다. 입력한 금액: ${money}`;
    }

    if (money > 1000000) {
      throw `[ERROR] 한 번에 최대로 구입할 수 있는 금액은 100만원 입니다. 입력한 금액: ${money}`;
    }
  }

  generateLottoNumber(count) {
    const myLotto = [];

    while (myLotto.length < count) {
      const numbersOfLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbersOfLotto, false);
      myLotto.push(lotto);
    }
    this.showMyLotto(myLotto);

    return myLotto;
  }

  showMyLotto(myLotto) {
    MissionUtils.Console.print(`${myLotto.length}개를 구매했습니다.`);
    myLotto.forEach((lotto) => {
      lotto.printLottoNumbers();
    });
  }

  getWinningNums() {
    let winningLotto = [];
    let bonusNumber = undefined;

    MissionUtils.Console.readLine(
      "당첨 번호를 입력해주세요. \n >",
      (answer) => {
        winningLotto = answer.split(",");
      }
    );
    MissionUtils.Console.close();
    winningLotto = winningLotto.map((element) => Number(element));
    new Lotto(winningLotto);

    MissionUtils.Console.readLine(
      "보너스 번호를 입력해주세요. \n >",
      (answer) => {
        bonusNumber = Number(answer);
      }
    );
    MissionUtils.Console.close();
    this.validBonusNumber(winningLotto, bonusNumber);
    winningLotto.push(bonusNumber);

    return winningLotto;
  }

  validBonusNumber(winingLotto, num) {
    if (isNaN(num)) {
      throw `[ERROR] 보너스 번호가 숫자형태가 아닙니다.`;
    }

    if (num < 1 || num > 45) {
      throw `[ERROR] 로또 번호는 1 ~ 45까지 입니다.`;
    }

    if (winingLotto.includes(num)) {
      throw `[ERROR] 중복되는 숫자입니다.`;
    }
  }

  calLottoProfit(myLotto, winningNums) {
    const winningInfo = {};
    const principal = myLotto.length * 1000;
    let totalMoney = 0;

    for (let rank = 0; rank <= 5; rank++) {
      winningInfo[rank] = 0;
    }

    myLotto.forEach((lotto) => {
      const rank = lotto.calRank([...winningNums]);
      winningInfo[rank] += 1;
      totalMoney += this.moneyAccordingToRank(rank);
    });

    this.showProfitResult(winningInfo, totalMoney, principal);
  }

  moneyAccordingToRank(rank) {
    let money = 0;

    switch(rank) {
      case 1:
        money += FIRST_LOTTO;
        break;

      case 2:
        money += SECOND_LOTTO;
        break;

      case 3:
        money += THIRD_LOTTO;
        break;

      case 4:
        money += FOURTH_LOTTO;
        break;

      case 5:
        money += FIFTH_LOTTO;
        break;

      default:
        break;
    }

    return money;
  }

  showProfitResult(winningInfo, profit, principal) {
    const totalProfit = profit / principal;

    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningInfo[5]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningInfo[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningInfo[3]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningInfo[2]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winningInfo[1]}개`);
    MissionUtils.Console.print(`총 수익률은 ${Math.round(totalProfit * 1000) / 10}%입니다.`);
  }

}

module.exports = App;