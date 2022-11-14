const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getPlayerInput() {
    let count;
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      this.validate(input);
      count = this.countLotto(parseInt(input));
      MissionUtils.Console.print(count + "개를 구매했습니다.");
      for (let index = 0; index < count; index++) {
        this.getRandomNumber();
      }
    });
  }

  getRandomNumber() {
    const ret = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    ret.sort(function (a, b) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });

    return ret;
  }

  validate(input) {
    let element;

    for (let index = 0; index < input.length; index++) {
      element = Number(input[index]);
      if (isNaN(element)) {
        throw new Error("숫자만 입력해 주세요");
      }
    }
  }

  countLotto(cost) {
    if (cost % 1000) {
      throw new Error("[ERROR] 1,000원 단위로 입력해야합니다");
    }
    return cost / 1000;
  }

  play() {
    this.getPlayerInput();
  }
}

const app = new App();
app.play();

module.exports = App;
