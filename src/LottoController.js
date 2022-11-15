const MissionUtils = require('@woowacourse/mission-utils');
const LottoPublisher = require('./LottoPublisher.js');
const LottoStore = require('./LottoStore.js');
const LottoViewer = require('./LottoViewer.js');
const Customer = require('./Customer.js');
const { VALUE } = require('./constants/numbers');

class LottoController {
  constructor() {
    this.lottoPublisher = new LottoPublisher();
    this.lottoStore = new LottoStore();
    this.lottoViewer = new LottoViewer();
    this.customer = new Customer();
    this.initiate();
  }
  initiate() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      this.customerLottoPurchase(input);
      MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
          this.lottoPublisher.receiveUserInputWinningNumbers(input);
          MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
              this.lottoPublisher.receiveUserInputBonusNumber(input);
              this.matchNumbersPrintResult();
              MissionUtils.Console.close();
            }
          );
        }
      );
    });
  }

  customerLottoPurchase(money) {
    const lottoCount = this.lottoStore.askBuyLottoCount(money);
    for (let i = 0; i < lottoCount; i++) {
      const lotto = this.lottoStore.sellLotto();
      this.customer.purchaseLotto(lotto);
    }
    const purchasedLottos = this.customer.list();
    this.lottoViewer.printLottoPurchaseResult(purchasedLottos);
  }

  matchNumbersPrintResult() {
    const purchasedLottos = this.customer.list();
    const matchedLottoNumbers = purchasedLottos.map((lotto) =>
      this.lottoPublisher.checkMatchedLottoNumbersRank(lotto.numbers)
    );
    const arranged = this.lottoViewer.arrangeLottoWinningResult(
      matchedLottoNumbers,
      this.customer.list().length * VALUE.LOTTO_PRICE
    );
    this.lottoViewer.printLottoWinningStats(arranged);
  }
}

module.exports = LottoController;
