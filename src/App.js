const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #money;
  #winningNumbers;
  #specialNumber;

  play() {
    this.acceptMoney();
    this.acceptWinningNumbers();
    this.acceptSpecialNumber();
  }

  acceptMoney() {
    const query = "구입금액을 입력해 주세요.";
    const err =
      "천의 배수의 양의 정수만 입력할 수 있습니다. ( 예: 135000 (O); -2342 (X) )";

    MissionUtils.readLine(query, (userInput) => {
      if (!this.#validateMoney(userInput)) {
        MyErrorHandler(err);
      }
      this.#money = Number(userInput);
    });
  }

  #validateMoney(money) {
    if (typeof money != "string") {
      return false;
    }

    if (!/^\+?\d+000$/.test(money)) {
      return false;
    }

    return true;
  }

  acceptWinningNumbers() {
    const query = "당첨 번호를 입력해 주세요 (쉼표로 구분).";
    const err =
      "여섯 개의 정수 (1과 45 사이)를 입력해 주세요. 정수와 정수 사이는 쉼표로 구분되어야 합니다. ( 예: 21, 32, 1, 45, 10, 6 )";

    MissionUtils.readLine(query, (userInput) => {
      if (!this.#validateWinningNumbers(userInput)) {
        MyErrorHandler(err);
      }
      this.#winnningNumbers = userInput.split(",").map(Number);
    });
  }

  #validateWinningNumbers(numbers) {
    if (typeof numbers != "string") {
      return false;
    }

    vettedNumbers = numbers.split(",");

    if (vettedNumbers.length != 6) {
      return false;
    }

    // check for repeated numbers
    if (new Set(vettedNumbers).size != 6) {
      return false;
    }

    for (let number of vettedNumbers) {
      if (/^\+?\d+$/.test(number)) {
        return false;
      }

      if (Number(number) < 1 || Number(number) > 45) {
        return false;
      }
    }

    return true;
  }

  acceptSpecialNumber() {
    const query = "보너스 번호를 입력해 주세요.";
    const err = "여섯 개의 정수 (1과 45 사이)를 입력해 주세요. ( 예: 45 )";

    MissionUtils.readLine(query, (userInput) => {
      if (!this.#validateSpecialNumber(userInput)) {
        MyErrorHandler(err);
      }
      this.#specialNumber = Number(userInput);
    });
  }

  #validateSpecialNumber(number) {
    if (typeof number != "string") {
      return false;
    }

    if (!/^\+?[1-9]\d*$/.test(number)) {
      return false;
    }

    const intNumber = Number(number);

    if (intNumber < 1 || intNumber > 45) {
      return false;
    }

    // assumes #winningNumbers is already defined at this point
    if (!this.#winningNumbers || this.#winningNumbers.includes(intNumber)) {
      return false;
    }

    return true;
  }
}

module.exports = App;
