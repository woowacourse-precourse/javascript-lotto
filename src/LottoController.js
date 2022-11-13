const MissionUtils = require('@woowacourse/mission-utils');
const LottoPublisher = require('./LottoPublisher.js');
const LottoStore = require('./LottoStore.js');
const LottoViewer = require('./LottoViewer.js');
const Customer = require('./Customer.js');

class LottoController {
  constructor() {
    this.lottoPublisher = new LottoPublisher();
    this.lottoStore = new LottoStore();
    this.lottoViewer = new LottoViewer();

    this.init();
  }
  init() {
    const customer = new Customer();
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      const lottoCount = this.lottoStore.askBuyLottoCount(input);
      for (let i = 0; i < lottoCount; i++) {
        const lotto = this.lottoStore.sellLotto();
        customer.purchaseLotto(lotto);
      }
    });
  }
}

module.exports = LottoController;
