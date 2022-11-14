const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const LOTTO_PRICE = 1000;
const FIFTH_MONEY = 5000;
const FOURTH_MONEY = 50000;
const THIRD_MONEY = 1500000;
const SECOND_MONEY = 30000000;
const FIRST_MONEY = 2000000000;

class App {
  play() {
    // 금액 입력
    this.getMoney();
    MissionUtils.Console.print(this.checkMoney() + "개를 구매했습니다.");
    // 구입 금액에 해당하는 만큼 로또 발행, 출력
    const lottosNumbers = [];
    this.creatLotto;
    // 당첨번호 입력받기
    const winningNumber = this.getWinningNumber();
    // 보너스번호 입력받기
    const bonusNumber = this.getBonusNumber();
  }

  // 금액 입력
  getMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (money) => {
      if (isNaN(money)) {
        throw new Error("[ERROR] 숫자를 입력하지 않았습니다.");
      }
    });
  }

  // 금액 로또로 변환
  checkMoney(money) {
    const moneyChange = money / LOTTO_PRICE;
    if (!Number.isInteger(moneyChange)) {
      throw new Error("[ERROR] 알맞은 값을 입력하지 않았습니다.");
    }
    return moneyChange;
  }

  // 구입 금액에 해당하는 만큼 로또 발행, 출력
  creatLotto() {
    for (let i = 0; i < this.getMoney(); i++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumber.sort(function (a, b) {
        return a - b;
      });
      this.lottosNumbers.push(lottoNumber);
    }
    MissionUtils.Console.print(lottosNumbers);
  }

  // 당첨번호 입력받기
  getWinningNumber() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (numbers) => {
      return new Lotto(numbers);
    });
  }

  // 보너스번호 입력받기
  getBonusNumber() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (number) => {
      if (isNaN(number)) {
        throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
      }
      if (number >= 1 && number <= 45) {
        throw new Error("[ERROR] 보너스 번호는 1~45범위 내의 숫자여야 합니다.");
      }
      return number;
    });
  }
}

module.exports = App;
