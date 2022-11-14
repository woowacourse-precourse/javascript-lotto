const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./constant/message");
const Validation = require("./Validation");
const { stringToNumber } = require("./utils/common");
const LottoUtils = require("./utils/lottoUtils");

class LottoManager {
  #lottoTickets;
  #winningNumber;
  #bonusNumber;

  constructor() {
    this.#lottoTickets = [];
  }

  get lottoTickets() {
    return this.#lottoTickets;
  }

  set lottoTickets(lottoTickets) {
    this.#lottoTickets = lottoTickets;
  }

  get winningNumber() {
    return this.#winningNumber;
  }

  set winningNumber(winningNumber) {
    this.#winningNumber = winningNumber;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  set bonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  processingLottoResult() {
    const result = LottoUtils.getLottoResult(
      this.lottoTickets,
      this.winningNumbers,
      this.bonusNumber
    );
    LottoUtils.printResult(this.lottoTickets, result);
  }

  receiveBonusNumber() {
    Console.readLine(MESSAGE.BONUS, (bonusNumberString) => {
      this.bonusNumber = stringToNumber(bonusNumberString);
      Validation.validateNumbers([this.bonusNumber]);
      Validation.validateBonusNumbers(this.winningNumbers, [this.bonusNumber]);

      this.processingLottoResult();
      Console.close();
    });
  }

  receiveWinningNumbers() {
    Console.readLine(MESSAGE.WINNING, (winningNumberString) => {
      this.winningNumbers = LottoUtils.splitComma(winningNumberString);
      Validation.validateNumbers(this.winningNumbers);
      Validation.validateWinningNumbers(this.winningNumbers);

      this.receiveBonusNumber();
    });
  }

  receivePurchaseCost() {
    Console.readLine(MESSAGE.START, (purchaseString) => {
      Validation.validatePayment(purchaseString);

      const purchaseCost = stringToNumber(purchaseString);
      const lottoCount = LottoUtils.calculateLottoCount(purchaseCost);
      this.lottoTickets = LottoUtils.createLottos(lottoCount);
      LottoUtils.printLotto(this.lottoTickets);

      this.receiveWinningNumbers();
    });
  }

  start() {
    this.receivePurchaseCost();
  }
}

module.exports = LottoManager;
