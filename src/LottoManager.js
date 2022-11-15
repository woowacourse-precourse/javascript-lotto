const MissionUtils = require("@woowacourse/mission-utils");

const Lotto = require("./Lotto");
const Ticket = require("./Ticket");
const Validator = require("./Validator");
const InputView = require("./InputView");

const MAX_NUMBER = 45;
const MIN_NUMBER = 1;

const MATCH_THREE = 0;
const MATCH_FOUR = 1;
const MATCH_FIVE = 2;
const MATCH_FIVE_PLUS_BONUS = 3;
const MATCH_SIX = 4;

class LottoManger {
  constructor() {
    this.lottoWinningNumbers = null;
    this.lottoWinningNumbersArray = null;
    this.lottoBonusNumbers = null;
    this.ticketCounts = 0;
    this.tickets = [];
    this.winningTicketsCount = new Array(5).fill(0);
  }

  init() {
    this.purchaseTicket();
  }

  purchaseTicket() {
    InputView.getInputPurchaseAmount(this.manageLottoGame.bind(this));
  }

  manageLottoGame(price) {
    this.ticketCounts = this.calculateNumberOfTickets(price);
    MissionUtils.Console.print(`${this.ticketCounts}개를 구매했습니다.`);
    this.manageTickets();
    InputView.getInputLottoNumbers(this.manageInputLottoNumbers.bind(this));
  }

  calculateNumberOfTickets(price) {
    Validator.validateInputPurchase(price);
    const numberOfTickets = price / 1000;
    return numberOfTickets;
  }

  manageTickets() {
    for (let i = 0; i < this.ticketCounts; i++) {
      let ticketNumbers = this.createTicketNumbers();
      ticketNumbers = this.sortAscendingOrder(ticketNumbers);
      this.printTickets(ticketNumbers);
      this.tickets.push(new Ticket(ticketNumbers));
    }
  }

  printTickets(ticketNumbers) {
    MissionUtils.Console.print('['+ticketNumbers.join(", ")+']');
  }

  sortAscendingOrder(ticketNumbers) {
    return ticketNumbers.sort((a, b) => a - b);
  }

  createTicketNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  manageInputLottoNumbers(winningNumbersInput) {
    const winningNumbersArray = winningNumbersInput
      .split(",")
      .map((string) => parseInt(string));
    this.lottoWinningNumbersArray = winningNumbersArray;
    Validator.validateInputWinningNumbers(winningNumbersArray);
    this.lotto = new Lotto(winningNumbersArray);
    InputView.getInputBonusNumber(this.manageInputBonusNumber.bind(this));
  }

  manageInputBonusNumber(bonusNumberInput) {
    Validator.validateInputBonusNumber(
      bonusNumberInput,
      this.lottoWinningNumbersArray
    );
    this.lottoBonusNumbers = parseInt(bonusNumberInput);
    this.tickets.forEach((ticket) => this.enumerateRanks(ticket));
    this.printOutResult();
  }

  enumerateRanks(ticket) {
    const matches = this.lotto.matchNumbers(ticket);
    switch (matches) {
      case 3:
        this.winningTicketsCount[MATCH_THREE]++;
        break;
      case 4:
        this.winningTicketsCount[MATCH_FOUR]++;
        break;
      case 5:
        this.ticketMatchesBonus(ticket)
          ? this.winningTicketsCount[MATCH_FIVE_PLUS_BONUS]++
          : this.winningTicketsCount[MATCH_FIVE]++;
        break;
      case 6:
        this.winningTicketsCount[MATCH_SIX]++;
        break;
      default:
        break;
    }
  }

  ticketMatchesBonus(ticket) {
    if (ticket.getNumbers().includes(this.bonus)) {
      return true;
    }
    return false;
  }

  printOutResult() {
    MissionUtils.Console.print("\n");
    MissionUtils.Console.print("당첨 통계\n---");
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${this.winningTicketsCount[MATCH_THREE]}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${this.winningTicketsCount[MATCH_FOUR]}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.winningTicketsCount[MATCH_FIVE]}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winningTicketsCount[MATCH_FIVE_PLUS_BONUS]}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.winningTicketsCount[MATCH_SIX]}개`
    );
    this.printOutReturns();
  }

  printOutReturns() {
    const totalPurchase = this.ticketCounts * 1000;
    let winningPrize = 0;
    const prizes = [5000, 50000, 1500000, 30000000, 2000000000];
    this.winningTicketsCount.forEach(
      (e, idx) => (winningPrize += e * prizes[idx])
    );

    MissionUtils.Console.print(
      `총 수익률은 ${((winningPrize * 100) / totalPurchase).toFixed(1)}%입니다.`
    );
    MissionUtils.Console.close();
  }
}

module.exports = LottoManger;
