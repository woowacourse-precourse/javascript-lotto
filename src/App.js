const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, WINNING_RESULT_PRINT } = require('./constants.js');
const buyingValidate = require('./buyingValidate.js');
const bonusValidate = require('./bonusValidate.js');
const LottoTicket = require('./LottoTicket.js');
const Lotto = require('./Lotto.js');
const WinningResult = require('./WinningResult');

class App {
  constructor() {
    this.buyingLottoNumber;
    this.lottoTicketList;
    this.winningNumberList;
    this.bonusNumber;
  }

  play() {
    this.inputBuyingAmount();
  }

  inputBuyingAmount() {
    Console.readLine(MESSAGE.INPUT_BUYING_AMOUNT, (BuyingAmount) => {
      this.buyingLottoNumber = buyingValidate(BuyingAmount);
      this.printBuyingLottoNumber();
    });
  }

  printBuyingLottoNumber() {
    Console.print(`\n${this.buyingLottoNumber}${MESSAGE.BUYING_LOTTO_NUMBER}`);
    return this.printBuyingLottoList();
  }

  printBuyingLottoList() {
    this.lottoTicketList = LottoTicket.publish(this.buyingLottoNumber);
    return this.InputWinningNumber();
  }

  InputWinningNumber() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBER, (winningNumber) => {
      this.getWinningNumberList(winningNumber);
    });
  }

  getWinningNumberList(winningNumber) {
    this.winningNumberList = winningNumber.split(',');
    new Lotto(this.winningNumberList);
    this.inputBonusNumber();
  }

  inputBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      bonusValidate(this.winningNumberList, bonusNumber);
      this.bonusNumber = bonusNumber;
      this.printWinningResult();
    });
  }

  printWinningResult() {
    const winningResult = new WinningResult(this.winningNumberList, this.bonusNumber, this.lottoTicketList);
    Console.print(MESSAGE.WINNING_STATICS);
    Console.print(`${WINNING_RESULT_PRINT[3]} - ${winningResult.numberByMatching[3]}개`);
    Console.print(`${WINNING_RESULT_PRINT[4]} - ${winningResult.numberByMatching[4]}개`);
    Console.print(`${WINNING_RESULT_PRINT[5]} - ${winningResult.numberByMatching[5]}개`);
    Console.print(`${WINNING_RESULT_PRINT['5+1']} - ${winningResult.numberByMatching['5+1']}개`);
    Console.print(`${WINNING_RESULT_PRINT[6]} - ${winningResult.numberByMatching[6]}개`);
    Console.print(`총 수익률은 ${winningResult.getProfitRate()}%입니다.`);
    Console.close();
  }
}

module.exports = App;
