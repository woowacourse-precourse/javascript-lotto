const MissionUtils = require("@woowacourse/mission-utils");

const Lotto = require("./Lotto");

class App {
  play() {
    // 클래스를 분리 해서 시작
    const countOfLotto = this.calCountOfLotto(); // 수정
    const myLotto = this.generateLottoNumber(countOfLotto); // generateLotto
    const winningLotto = this.getWinningLotto();
  }

  calCountOfLotto() {
    let money = 0;

    MissionUtils.Console.readLine("구매금액을 입력해주세요. \n >", (answer) => {
      money = Number(answer);
    });
    MissionUtils.Console.close();
    this.isValidMoney(money);

    return parseInt(money / 1000);
  }

  isValidMoney(money) {
    if (Number.isNaN(number)) {
      throw new Error(`[ERROR] 입력 금액이 숫자형태가 아닙니다.`);
    }

    if (money < 1000) {
      throw new Error(
        `[ERROR] 로또 한장의 가격은 1000원입니다. 입력한 금액: ${money}`
      );
    }

    if (money > 1000000) {
      throw new Error(
        `[ERROR] 한 번에 최대로 구입할 수 있는 금액은 100만원 입니다. 입력한 금액: ${money}`
      );
    }
  }

  generateLottoNumber(count) {
    const myLotto = [];

    while (myLotto.length !== count) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers, false);
      myLotto.push(lotto);
    }
    this.printMyLotto(count, myLotto);

    return myLotto;
  }

  printMyLotto(count, myLotto) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    myLotto.forEach((lotto) => {
      lotto.printLottoNumbers();
    });
  }

  getWinningLotto() {
    const winningLotto = [];

    MissionUtils.Console.readLine(
      "당첨 번호를 입력해주세요. \n >",
      (answer) => {
        answer.split("").forEach((element) => {
          winningLotto.push(Number(element));
        });
      }
    );
    MissionUtils.Console.close();

    MissionUtils.Console.reaLine(
      "보너스 번호를 입력해주세요. \n >",
      (answer) => {
        winningLotto.push(Number(answer));
      }
    );
    MissionUtils.Console.close();
    new Lotto(winningLotto, true);

    return winningLotto;
  }

  isValidLotto(lotto, bonus) {
    
  }
}

module.exports = App;
