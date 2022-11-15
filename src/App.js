const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const Lotto = require("./Lotto");
const WinningNumbers = require("./WinningNumbers");

const { Console, Random } = MissionUtils;

const LOTTO_RESULT_MESSAGE = (resultNumber) => `
3개 일치 (5,000원) - ${resultNumber[0]}개
4개 일치 (50,000원) - ${resultNumber[1]}개
5개 일치 (1,500,000원) - ${resultNumber[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultNumber[4]}개
6개 일치 (2,000,000,000원) - ${resultNumber[3]}개
`;

const TOTAL_PROFIT_MESSAGE = (profit) => `총 수익률은 ${profit}%입니다.`;

// 5,4,3,1,2등 순서
const LOTTO_PROCEEDS_INFO = [
  { ranking: 5, proceed: 5000 },
  { ranking: 4, proceed: 50000 },
  { ranking: 3, proceed: 1500000 },
  { ranking: 1, proceed: 2000000000 },
  { ranking: 2, proceed: 30000000 },
];

class App {
  constructor() {
    this.user = new User();
    this.lottos = [];
    this.winningNumbers = new WinningNumbers();

    // 5,4,3,1,2등 순서
    this.lottoResults = [0, 0, 0, 0, 0];
  }

  play() {
    this.chargePurchaseMoney();
  }

  chargePurchaseMoney() {
    Console.readLine("구입금액을 입력하세요 : ", (answer) => {
      this.user.changeMoney(answer);
      Console.print(answer);
      this.purchaseLotto(this.user.getMoney());
    });
  }

  purchaseLotto(money) {
    const purChaseNumber = money / 1000;
    Console.print(`${purChaseNumber}개를 구매했습니다.`);
    for (let i = 0; i < purChaseNumber; i += 1) {
      this.lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
    this.lottos.forEach((lotto) => {
      Console.print(lotto.getLottoNumbersByString());
    });
    this.enterWinningNumbers();
  }

  enterWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요. : ", (answer) => {
      Console.print(answer);
      const numbericAnswer = answer.split(",").map((number) => Number(number));
      this.winningNumbers.addWinningNumbers(numbericAnswer);
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요. : ", (answer) => {
      Console.print(answer);
      this.winningNumbers.addBonusNumber(Number(answer));
      this.showResultMessage();
    });
  }

  showResultMessage() {
    Console.print("당첨 통계");
    Console.print("---");
    this.checkResult();
  }

  checkResult() {
    this.lottos.forEach((lotto) => {
      const collectInfo = this.getCollectInfo(lotto.getLottoNumbers());
      this.plusWinnerCount(collectInfo);
    });
    Console.print(LOTTO_RESULT_MESSAGE(this.lottoResults));
    const totalProceeds = this.getTotalProceeds(this.lottoResults);
    Console.print(
      TOTAL_PROFIT_MESSAGE(this.changeProceedFormat(totalProceeds))
    );
    Console.close();
  }

  getCollectInfo(lottoNumbers) {
    let collectNumber = 0;
    let bonusNumber = false;
    lottoNumbers.forEach((number) => {
      if (this.winningNumbers.bonusNumber === number) {
        bonusNumber = true;
      }
      if (this.winningNumbers.winningNumbers.includes(number)) {
        collectNumber += 1;
      }
    });
    return { collectNumber, bonusNumber };
  }

  plusWinnerCount(collectInfo) {
    if (collectInfo.collectNumber === 5 && collectInfo.bonusNumber) {
      this.lottoResults[4] += 1;
      return;
    }
    if (collectInfo.collectNumber > 2) {
      this.lottoResults[collectInfo.collectNumber - 3] += 1;
    }
  }

  getTotalProceeds(lottoResults) {
    let proceeds = 0;
    lottoResults.forEach((result, index) => {
      proceeds += result * LOTTO_PROCEEDS_INFO[index].proceed;
    });
    return proceeds;
  }

  changeProceedFormat(number) {
    return ((number / this.user.getMoney()) * 100).toFixed(1);
  }
}

const app = new App();
app.play();

module.exports = App;
