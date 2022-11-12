const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {}

  play() {}

  // 금액 입력
  lottoStart(answer) {
    Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      if (isNaN(answer)) {
        throw new Error("[ERROR] 숫자를 입력하지 않았습니다.");
      } else {
        checkMoney(answer);
      }
    });
  }

  // 금액 로또로 변환
  checkMoney(answer) {
    let moneyChange = answer / 1000;
    if (!Number.isInteger(moneyChange)) {
      throw new Error("[ERROR] 알맞은 값을 입력하지 않았습니다.");
    } else {
      console.print(moneyChange + "개를 구매했습니다.");
    }
  }

  // 구입 금액에 해당하는 만큼 로또 발행, 출력
  creatLottos = [];

  creatLotto() {
    for (let i = 0; i < moneyChange; i++) {
      let lottoArray = Random.pickUniqueNumbersInRange(1, 45, 6);
      let lottoArraySort = lottoArray.sort(function (a, b) {
        return a - b;
      });
      creatLottos.push(lottoArraySort);
      console.print(creatLottos);
    }
  }
}

module.exports = App;
