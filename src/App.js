const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getPlayerInput() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      console.log(this.validate(input));
    });
  }

  validate(input) {
    let element;

    for (let index = 0; index < input.length; index++) {
      element = Number(input[index]);
      if (isNaN(element)) {
        throw new Error("숫자만 입력해 주세요");
      }
    }
    return this.countLotto(parseInt(input));
  }

  countLotto(cost) {
    if (cost % 1000) {
      throw new Error("1,000원 단위로 입력해야합니다");
    }
    return cost / 1000;
  }

  play() {
    this.getPlayerInput();
  }
}

module.exports = App;
