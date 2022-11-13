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
      customer.printLottoPurchaseResult();
      MissionUtils.Console.readLine(
        '\n당첨 번호를 입력해 주세요.\n',
        (input) => {
          this.lottoPublisher.receiveUserInputWinningNumbers(input);
          MissionUtils.Console.readLine(
            '\n보너스 번호를 입력해 주세요.\n',
            (input) => {
              this.lottoPublisher.receiveUserInputBonusNumber(input);
              const purchasedLottos = customer.list();
              const matchedLottoNumbers = purchasedLottos.map((lotto) =>
                this.lottoPublisher.checkMatchedLottoNumbersRank(lotto.numbers)
              );
              const arranged = this.lottoViewer.arrangeLottoWinningResult(
                matchedLottoNumbers,
                lottoCount * 1000
              );
              this.lottoViewer.printLottoWinningStats(arranged);
              MissionUtils.Console.close();
            }
          );
        }
      );
    });
  }
}

module.exports = LottoController;
