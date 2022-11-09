const MissionUtils = require("@woowacourse/mission-utils");

const Lotto = require("./Lotto");

class App {
  play() {
    // 클래스를 분리 해서 시작
    const countOfLotto = this.calCountOfLotto();
    const myLotto = this.makeLotto(countOfLotto);
  }

  calCountOfLotto() { 
    let money = 0;

    MissionUtils.Console.readLine(
      "구매금액을 입력해주세요. \n >",
      (answer) => {
        money = Number(answer);
      }
    )
    this.isValidMoney(money);

    return parseInt(money / 1000);
  }

  isValidMoney(money) {
    if (Number.isNaN(number)) {
      throw new Error(`[Error] 입력 금액이 숫자형태가 아닙니다.`);
    }

    if (money < 1000) {
      throw new Error(`[Error] 로또 한장의 가격은 1000원입니다. 입력한 금액: ${money}`);
    }

    if (money > 100000) {
      throw new Error(`[Error] 한 번에 최대로 구입할 수 있는 금액은 10만원 입니다. 입력한 금액: ${money}`);
    }
  }

  makeLotto(count) {
    const myLotto = [];

    while (myLotto.length !== count) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      myLotto.push(lotto);
    }

    return myLotto;
  }
}

module.exports = App;
