const MissionUtils = require("@woowacourse/mission-utils");
const LottoCompany = require("./LottoCompany");
const LottoStore = require("./LottoStore");

class Customer {
  payMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.lottoStore = new LottoStore();
      const lottos = this.lottoStore.makeLotto(money);
      this.requestLottoAnalysis(lottos);
    });
  }

  requestLottoAnalysis(lottos) {
    this.lottoCompany = new LottoCompany();
    this.lottoCompany.drawLottoNumber(lottos);
  }
}

module.exports = Customer;
