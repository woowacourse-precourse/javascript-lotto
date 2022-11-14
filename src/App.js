const { Console } = require("@woowacourse/mission-utils");
const {
  buyLottos,
  getStatisticsTemplate,
  getStatistics,
  getRateOfReturn,
  getRevenue,
} = require("./Core/App.util");
class App {
  play() {
    this.inputBuyPrice((price) => {
      if (price % 1000 !== 0) {
        throw new Error("[ERROR] 복권 구매 금액 오류");
      }
      const lottos = this.sellLottos(price);
      this.inputAnswerLottoNumber((winningNumbers, bonusNumber) =>
        this.compareLottos(price, lottos, winningNumbers, bonusNumber)
      );
    });
  }

  inputBuyPrice(cb) {
    Console.readLine("구입금액을 입력해 주세요. \n ", (n) => cb(n));
  }

  sellLottos(price) {
    const lottoLength = price / 1000;
    this.print(`${lottoLength}개를 구매했습니다.`);
    const lottos = buyLottos(lottoLength);
    return lottos;
  }

  compareLottos(price, lottos, winningNumbers, bonusNumber) {
    const counts = lottos.map((lotto) =>
      lotto.checkLottoResult(winningNumbers, bonusNumber)
    );
    const statistics = getStatistics(counts);
    this.getStatistics(statistics);
    this.getRateOfReturn(price, statistics);
  }

  inputAnswerLottoNumber(cb) {
    Console.readLine("\n당첨 번호를 입력해 주세요. \n ", (winningNumbers) => {
      Console.readLine("\n보너스 번호를 입력해 주세요. \n", (bonusNumber) =>
        cb(winningNumbers, bonusNumber)
      );
    });
  }

  getStatistics(statistics) {
    this.print("\n당첨 통계 \n ---");
    getStatisticsTemplate(statistics).forEach((line) => this.print(line));
  }

  getRateOfReturn(price, statistics) {
    this.print(
      `총 수익률은 ${getRateOfReturn(price, getRevenue(statistics))}%입니다.`
    );
    Console.close();
  }
  print(message) {
    Console.print(message);
  }
}

module.exports = App;
