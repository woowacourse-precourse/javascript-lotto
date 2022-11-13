const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {}

  // 금액 입력
  getMoney() {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      if (isNaN(money)) {
        throw new Error("[ERROR] 숫자를 입력하지 않았습니다.");
      }
      return this.checkMoney(money);
    });
  }

  // 금액 로또로 변환
  checkMoney(money) {
    const moneyChange = money / 1000;
    if (!Number.isInteger(moneyChange)) {
      throw new Error("[ERROR] 알맞은 값을 입력하지 않았습니다.");
    }
    return moneyChange;
  }

  // 구입 금액에 해당하는 만큼 로또 발행, 출력
  lottosNumbers = [];

  creatLotto() {
    for (let i = 0; i < this.getMoney; i++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumber.sort(function (a, b) {
        return a - b;
      });
      this.lottosNumbers.push(lottoNumber);
    }
    Console.print(lottosNumbers);
  }

  // 당첨번호 입력받기
  getWinningNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.", (numbers) => {
      return new Lotto(numbers);
    });
  }
}

module.exports = App;
