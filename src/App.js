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
      // TODO: 예외 처리 부분은 따로 함수로 리팩토링하는 것이 좋겠다.
      if (isNaN(element))
        throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다.");
      if (element === "")
        throw new Error("[ERROR] 숫자들이 ,로 올바르게 나뉘지 않았습니다.");
      numbers.push(parseInt(element));
    })

    return numbers;
  }

  checkBonusNumber(number, wonLotto) {
    if (isNaN(number) || number === "")
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    const NUMBER = parseInt(number);
    if (NUMBER < 1 || NUMBER > 45)
      throw new Error("[ERROR] 보너스 번호는 1-45 범위 숫자여야 합니다.");
    if (wonLotto.includesNumber(NUMBER))
      throw new Error("[ERROR] 보너스 번호는 기존 당첨 번호와 중복될 수 없습니다.");
  }
}

module.exports = App;
