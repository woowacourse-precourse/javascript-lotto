const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {
    const BoxOffice = new Vendor();

    BoxOffice.acceptMoney();
    BoxOffice.acceptWinningNumbers;
    BoxOffice.acceptSpecialNumber;

    const Tickets = BoxOffice.getTickets();
  }
}

class Vendor {
  #money;
  #winningNumbers;
  #specialNumber;

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

  getTickets() {
    const total = this.#money / 1000;
    const Tickets = [];

    MissionUtils.Console.print(`${total}개를 구매했습니다.`);

    for (let i = 0; i < total; ++i) {
      Tickets.push(this.#drawLotto());
      Tickets[Tickets.length - 1].print();
    }

    return Tickets;
  }

  #drawLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort(function (a, b) {
      return a - b;
    });
    return new Lotto(numbers);
  }

  announceResult(tickets) {
    MissionUtils.Console.print("당첨 통계\n---");
    MisstionUtils.Console.print("3개 일치 (5,000원) - 1개");
    MisstionUtils.Console.print("4개 일치 (50,000원) - 0개");
    MisstionUtils.Console.print("5개 일치 (1,500,000원) - 0개");
    MisstionUtils.Console.print(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개"
    );
    MisstionUtils.Console.print("6개 일치 (2,000,000,000원) - 0개");
    MisstionUtils.Console.print("총 수익률은 62.5%입니다.");
    MisstionUtils.Console.print("```\n\n---");
  }

  #computeResult(tickets) {}
}

module.exports = App;
