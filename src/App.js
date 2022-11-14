const { Console } = require("@woowacourse/mission-utils");
const { buyLottos, getStatisticsTemplate } = require("./Core/App.util");
class App {
  play() {
    this.inputBuyPrice((price) => {
      if (price % 1000 !== 0) {
        throw new Error("[ERROR] 복권 구매 금액 오류");
      }
      const lottoLength = price / 1000;
      const lottos = buyLottos(lottoLength);
      this.print(`${lottoLength}개를 구매했습니다.\n`);
      lottos.forEach((lotto) => lotto.print());
      this.inputWinningNumber((winningNumbers) => {
        this.inputBonusNumber((bonusNumber) => {
          const counts = lottos.map((lotto) =>
            lotto.checkLottoResult(winningNumbers, bonusNumber)
          );
          const result = getStatistics(counts);
          this.getStatistics(result);
          this.getRateOfReturn(price, result);
        });
      });
    });
  }

  inputBuyPrice(cb) {
    Console.readLine("구입금액을 입력해 주세요. \n ", (n) => cb(n));
  }

  buyLottos(lottoLength) {
    const lottos = buyLottos(lottoLength);
  }

  inputWinningNumber(cb) {
    Console.readLine("\n당첨 번호를 입력해 주세요. \n ", (n) => cb(n));
  }

  inputBonusNumber(cb) {
    Console.readLine("\n보너스 번호를 입력해 주세요. \n", (n) => cb(n));
  }

  getStatistics(statistics) {
    this.print("당첨 통계 \n --- \n");
    this.print(getStatisticsTemplate(statistics));
  }

  getRateOfReturn(price, statistics) {
    this.print(
      `총 수익률은 ${getRateOfReturn(price, getRevenue(statistics))}%입니다.`
    );
  }
  print(message) {
    Console.print(message);
  }
}

module.exports = App;
