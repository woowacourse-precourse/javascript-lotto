const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  lottoPrice;
  lottos;
  lottoWinningNumber;
  lottoBonusNumber;

  print(message) {
    MissionUtils.Console.print(message);
  }

  play() {
    this.getMoney();
    this.lottos = this.buyLotto(this.lottoPrice / 1000);
    this.enterLottoWinningNumbers();
    this.enterLottoBonusNum();

    const lotto = new Lotto(this.lottoWinningNumber);
    const lottoResult = lotto.getLottoResult(
      this.lottos,
      this.lottoBonusNumber
    );
    this.printLottoResult(lottoResult);
    this.printRevenueRate(lottoResult);
    MissionUtils.Console.close();
  }

  getMoney() {
    MissionUtils.Console.readLine("구입 금액을 입력해주세요 :", (price) => {
      const isValidInput = this.checkValidPrice(price);
      if (isValidInput == true) {
        this.lottoPrice = price;
        MissionUtils.Console.print(`${price / 1000}개를 구매했습니다.`);
      } else {
        MissionUtils.Console.close();
      }
    });

    return;
  }

  checkValidPrice(price) {
    if (price % 1000 !== 0) {
      throw "[ERROR] invalid price";
    }
    return true;
  }

  buyLotto(number) {
    const lottos = [];

    for (let i = 0; i < number; i++) {
      const lotto = this.generateRandomLotto();
      MissionUtils.Console.print(`[${lotto.join(", ")}]\n`);
      lottos.concat(lotto);
    }

    return lottos;
  }

  generateRandomLotto() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    lotto.sort(function (a, b) {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    });
    return lotto;
  }

  enterLottoWinningNumbers() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (numbers) => {
      const isValidInput = this.checkValidWinningNumber(numbers);
      if (isValidInput == true) {
        this.lottoWinningNumber = numbers.split(",");
      } else {
        MissionUtils.Console.close();
      }
    });
  }

  checkValidWinningNumber(number) {
    const numArr = number.split(",");
    const numSet = new Set(numArr);

    if (numArr.length !== numSet.size) {
      throw "[ERROR] duplicated character";
    }
    if (numArr.length !== 6) {
      throw "[ERROR] invalid input length";
    }

    return true;
  }

  enterLottoBonusNum() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요", (bonus) => {
      this.lottoBonusNumber = bonus;
    });
  }

  printLottoResult(result) {
    this.print("당첨통계\n");
    this.print("---\n");
    this.print(`3개 일치 (5,000원) - ${result[4]}개\n`);
    this.print(`4개 일치 (50,000원) - ${result[3]}개\n`);
    this.print(`5개 일치 (1,500,000원) - ${result[2]}개\n`);
    this.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[1]}개\n`);
    this.print(`6개 일치 (2,000,000,000원) - ${result[0]}개\n`);
  }

  printRevenueRate(result) {
    const totalRevenue = this.calcRevenue(result);
    MissionUtils.Console.print(`총 수익률은 ${totalRevenue}%입니다.`);
  }

  calcRevenue(result) {
    const lottoWinning = [2000000000, 30000000, 1500000, 50000, 5000];

    const calcEachRevenue = lottoWinning.map((price, index) => {
      return price * result[index];
    });
    const reducer = (accumulator, curr) => accumulator + curr;
    const totalRevenue = calcEachRevenue.reduce(reducer);

    return totalRevenue;
  }
}

module.exports = App;
