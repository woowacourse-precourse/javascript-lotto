const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {}

  play() {}

  // 금액 입력
  getMoney(answer) {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      if (isNaN(money)) {
        throw new Error("[ERROR] 숫자를 입력하지 않았습니다.");
      } else {
        checkMoney(money);
      }
    });
  }

  // 금액 로또로 변환
  checkMoney(money) {
    let moneyChange = money / 1000;
    if (!Number.isInteger(moneyChange)) {
      throw new Error("[ERROR] 알맞은 값을 입력하지 않았습니다.");
    } else {
      console.print(moneyChange + "개를 구매했습니다.");
    }
  }

  // 구입 금액에 해당하는 만큼 로또 발행, 출력
  bonusNumbers = [];
  lottosNumbers = [];

  creatLotto() {
    for (let i = 0; i < moneyChange; i++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 7);
      const bonusNumber = lottoNumber.splice(6, 1);
      this.bonusNumbers.push(bonusNumber);
      const lottoNumberSort = lottoNumber.sort(function (a, b) {
        return a - b;
      });
      this.allLottosNumbers.push(lottoNumberSort);
    }
    console.print(lottosNumbers);
  }
}

module.exports = App;
