const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      MissionUtils.Console.print(answer);
      if (this.validateMoney(answer)) {
        MissionUtils.Console.print(`${this.countTickets(answer)}개를 구매했습니다.`);
      }
    });
  }

  validateMoney(answer) {
    const money = Number(answer);
    if (Number.isNaN(money)) {
      throw Error('[ERROR] 숫자여야 합니다.');
    }
    if (money % 1000 !== 0) {
      throw Error('[ERROR] 1,000원 단위로 입력하세요');
    }
    return true;
  }

  countTickets(answer) {
    return answer / 1000;
  }
}

module.exports = App;
