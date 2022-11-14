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
    const money = this.buyLotto();

    // 구입 금액에 해당하는 만큼 로또 발행, 출력
    const lottosNumbers = [];
    this.creatLotto();

    // 당첨번호 입력받기
    const winningNumber = this.getWinningNumber();

    // 보너스번호 입력받기
    const bonusNumber = this.getBonusNumber();

    // 반환된 일치 갯수로 당첨내역에 넣기
    let fifth = { count: 0, prizeMoney: 0 };
    let fourth = { count: 0, prizeMoney: 0 };
    let third = { count: 0, prizeMoney: 0 };
    let second = { count: 0, prizeMoney: 0 };
    let first = { count: 0, prizeMoney: 0 };
    this.creatWinningChart();

    //상금 더하기
    const allPrizeMoney =
      fifth.prizeMoney +
      fourth.prizeMoney +
      third.prizeMoney +
      second.prizeMoney +
      first.prizeMoney;

    // 결과 출력
    this.printResult();
  }

  // 금액 입력
  buyLotto() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (money) => {
      if (isNaN(money)) {
        throw new Error("[ERROR] 숫자를 입력하지 않았습니다.");
      }
      const moneyChange = money / LOTTO_PRICE;
      if (!Number.isInteger(moneyChange)) {
        throw new Error("[ERROR] 알맞은 값을 입력하지 않았습니다.");
      }
      MissionUtils.Console.print(moneyChange + "개를 구매했습니다.");
      return money;
    });
  }

  // 구입 금액에 해당하는 만큼 로또 발행, 출력
  creatLotto() {
    for (let i = 0; i < this.money / LOTTO_PRICE; i++) {
      const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      lottoNumber.sort(function (a, b) {
        return a - b;
      });
      this.lottosNumbers.push(lottoNumber);
    }
    MissionUtils.Console.print(this.lottosNumbers);
  }

  // 당첨번호 입력받기
  getWinningNumber() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (numbers) => {
      const nums = numbers.split(",");
      return new Lotto(nums);
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

  // 반환된 일치 갯수로 당첨내역에 넣기
  creatWinningChart() {
    const [matchLotteCount, bonusCount] = Lotto.matchLotte();
    for (let i = 0; i < matchLotteCount.length; i++) {
      if (matchLotteCount[i] === 3) {
        this.fifth.count += 1;
        this.fifth.prizeMoney += FIFTH_MONEY;
      }
      if (matchLotteCount[i] === 4) {
        this.fourth.count += 1;
        this.fourth.prizeMoney += FOURTH_MONEY;
      }
      if (matchLotteCount[i] === 5) {
        this.third.count += 1;
        this.third.prizeMoney += THIRD_MONEY;
      }

      if (matchLotteCount[i] === 6) {
        this.first.count += 1;
        this.first.prizeMoney += FIRST_MONEY;
      }
    }
    if (bonusCount > 0) {
      this.second.count = bonusCount.length;
      this.second.prizeMoney = SECOND_MONEY * bonusCount.length;
    }
  }

  // 결과 출력
  printResult() {
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${this.fifth.count}개,
      4개 일치 (50,000원) - ${this.fourth.count}개,
      5개 일치 (1,500,000원) - ${this.third.count}개,
      5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.second.count}개,
      6개 일치 (2,000,000,000원) - ${this.first.count}개)
      총 수익률은 ${this.printEarningRatio()}입니다.`
    );
  }

  // 총 수익률 출력
  printEarningRatio() {
    const inputMoney = this.money * LOTTO_PRICE;
    const earningRatio = (inputMoney / this.allPrizeMoney) * 100;
    const rounding = earningRatio.toFixed(1);
    return rounding;
  }
}

const app = new App();
app.play;

module.exports = App;
