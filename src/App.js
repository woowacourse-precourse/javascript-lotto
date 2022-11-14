const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  lottoPrice;
  lottos;
  lottoWinningNumber;
  lottoBonusNumber;

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

    MissionUtils.Console.print(lottoResult);
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
      MissionUtils.Console.print(lotto);
      lottos.concat(lotto);
    }

    return lottos;
  }

  generateRandomLotto() {
    const lotto = [];
    while (lotto.length < 6) {
      const num = MissionUtils.Random.pickNumberInRange(1, 45);
      if (!lotto.includes(num)) {
        lotto.push(num);
      }
    }
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
}

module.exports = App;
