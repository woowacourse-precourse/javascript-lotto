const { Random } = require('@woowacourse/mission-utils');

const GameModel = require('./GameModel');
const Lotto = require('../Lotto');
const Bonus = require('../Bonus');
const Budget = require('../Budget');

const LottoModel = class extends GameModel {
  constructor() {
    super();
  }

  setLottoBudget(budget) {
    this.budget = budget;
    this.Budget = new Budget(this.budget);
  }

  setLottoCount() {
    this.ticketCount = this.Budget.countTicket();
    return this.ticketCount;
  }

  setLottoTickets(lottoTickets) {
    this.lottoTickets = lottoTickets;
  }

  setLottoWinningNumbers(winningNumbers) {
    this.winningNumbers = winningNumbers;
    this.validateLottoNumbers(winningNumbers);
  }

  setBonusNumber(bonus) {
    this.bonus = bonus;
    this.Bonus = new Bonus({ winningNumbers: this.winningNumbers, bonus });
  }

  setLottoWinnerHistory(winningHistory) {
    this.winningHistory = winningHistory;
  }

  setLottoRevenue(lottoRevenue) {
    this.lottoRevenue = lottoRevenue;
  }

  setLottoYield(lottoYield) {
    this.lottoYield = lottoYield;
  }

  pickLottoTickets({ start, end, count }) {
    const ticket = Random.pickUniqueNumbersInRange(start, end, count);
    this.validateLottoNumbers(ticket);

    return ticket;
  }

  validateLottoNumbers(winningNumbers) {
    new Lotto(winningNumbers);
  }
};

module.exports = LottoModel;
