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
    const lottosList = this.creatLotto();

    // 당첨번호 입력받기
    const winningNumber = this.getWinningNumber();

    // 보너스번호 입력받기
    const bonusNumber = this.getBonusNumber();

    // 최종 결과 출력
    this.printResult();
  }

  // 금액 입력
  buyLotto() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (money) => {
      if (!Number(money)) {
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
    let lottoList = [];
    for (let i = 0; i < this.money / LOTTO_PRICE; i++) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.sort(function (a, b) {
        return a - b;
      });
      lottoList.push(lotto);
    }
    MissionUtils.Console.print(lottoList);
    return lottoList;
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
      if (number < 1 || 45 < number) {
        throw new Error("[ERROR] 보너스 번호는 1~45범위 내의 숫자여야 합니다.");
      }
      return number;
    });
  }

  // 당첨 로또와 로또 리스트의 일치 갯수 반환
  matchLotto() {
    let matchingCountArr = [];
    let bonusMatch = [];
    for (let i = 0; i < this.money / LOTTO_PRICE; i++) {
      const lottoPiece = this.lottoLists[i];
      const matchingNumber = winningNumber.filter((num) =>
        lottoPiece.includes(num)
      );
      if (
        matchingNumber.length === 5 &&
        this.lottoList[i].includes(bonusNumber)
      ) {
        bonusMatch.push(bonusNumber);
      } else {
        matchingCountArr.push(matchingNumber.length);
      }
    }
    return [matchingCountArr, bonusMatch];
  }

  // 반환된 일치 갯수로 당첨내역에 넣기
  creatWinningChart() {
    let rankFifth = 0;
    let rankFourth = 0;
    let rankThird = 0;
    let rankSecond = 0;
    let rankFirst = 0;
    const [lottoMatchingCount, bonusMatchCount] = this.matchLotto();
    for (let i = 0; i < lottoMatchingCount.length; i++) {
      if (this.lottoMatchingCount === 3) {
        rankFifth += 1;
      }
      if (this.lottoMatchingCount === 4) {
        rankFourth += 1;
      }
      if (this.lottoMatchingCount === 5) {
        rankThird += 1;
      }
      if (this.lottoMatchingCount === 6) {
        rankFirst += 1;
      }
    }
    if (bonusMatchCount.length > 0) {
      rankSecond = bonusCount.length;
    }
    return [rankFifth, rankFourth, rankThird, rankSecond, rankFirst];
  }

  /// 최종 결과 출력
  printResult() {
    const [fifth, fourth, third, second, first] = this.creatWinningChart();
    const fifthMoney = fifth * FIFTH_MONEY;
    const fourthMoney = fourth * FOURTH_MONEY;
    const thirdMoney = third * THIRD_MONEY;
    const secondMoney = second * SECOND_MONEY;
    const firstMoney = first * FIFTH_MONEY;
    const prizeMoney =
      fifthMoney + fourthMoney + thirdMoney + secondMoney + firstMoney;
    const profitRate = (this.money / prizeMoney) * 100;
    const rounding = profitRate.toFixed(1);

    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${fifth}개,
      4개 일치 (50,000원) - ${fourth}개,
      5개 일치 (1,500,000원) - ${third}개,
      5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개,
      6개 일치 (2,000,000,000원) - ${first}개)
      총 수익률은 ${rounding}입니다.`
    );
  }
}

const app = new App();
app.play;

module.exports = App;
