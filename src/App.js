const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {

  }

  checkCost(cost) {
    if (isNaN(cost)) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 구입 금액은 숫자여야 합니다.");
    }

    const COST_IN_NUMBER = parseInt(cost);

    if (COST_IN_NUMBER % 1000 !== 0) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
    }
  }

  convertSixInputsToNumbers(input) {
    let elements = input.split(",");
    let numbers = [];
    elements.forEach((element) => {
      if (isNaN(element))
        throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다.");
      if (element === "")
        throw new Error("[ERROR] 숫자들이 ,로 올바르게 나뉘지 않았습니다.");
      numbers.push(parseInt(element));
    })

    return numbers;
  }
}

module.exports = App;
