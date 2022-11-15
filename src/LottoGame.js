const { Console } = require('@woowacourse/mission-utils');
const LottoSystem = require('./LottoSystem');
const Buyer = require('./players/Buyer');
const Organizer = require('./players/Organizer');
const MESSAGE = require('./utils/Message');

class LottoGame {
  constructor() {
    this.buyer = new Buyer();
    this.organizer = new Organizer();
    this.lottoSystem = new LottoSystem();
  }

  start() {
    Console.readLine(MESSAGE.inputPricesToBuyLotto, this.issueLottoTickets.bind(this));
  }

  issueLottoTickets(money) {
    this.buyer.setMoney(money);
    const ticketCount = money / 1000;
    const ticketList = this.lottoSystem.getLottoes(ticketCount);
    this.buyer.getLottoList(ticketList);
    this.buyer.showLottoList();

    Console.readLine(MESSAGE.inputWinningNumbers, this.issueWinningNumbers.bind(this));
  }

  issueWinningNumbers(numbers) {
    const winningNumbers = numbers
      .replace(' ', '')
      .split(',')
      .sort((a, b) => a - b)
      .map((number) => Number(number));

    this.organizer.setWinningNumbers(winningNumbers);
    Console.readLine(MESSAGE.inputBonusNumber, this.issueBonusNumber.bind(this));
  }

  issueBonusNumber(bonusNumber) {
    this.organizer.setBonusNumber(Number(bonusNumber));

    const lottoResultMap = this.buyer.getLottoResultMap(
      this.organizer.winningNumbers,
      this.organizer.bonusNumber
    );

    Console.print(this.organizer.getResultMessage(lottoResultMap));
    this.end();
  }

  end() {
    Console.close();
  }
}
module.exports = LottoGame;
