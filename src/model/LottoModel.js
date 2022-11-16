const { Random } = require('@woowacourse/mission-utils');

const GameModel = require('./GameModel');
const Lotto = require('../Lotto');
const Bonus = require('../Bonus');
const Budget = require('../Budget');
const Statics = require('../Statics');

const LottoModel = class extends GameModel {
  constructor() {
    super();
    this.Statics = new Statics();
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

  getLottoWinningHistory() {
    this.setLottoWinningHistory();
    return this.winningHistory;
  }

  setLottoWinningHistory() {
    const winningHistory = this.Statics.getLottoWinningHistory({
      lottoTickets: this.lottoTickets,
      winningNumbers: this.winningNumbers,
      bonus: this.bonus,
    });

    this.winningHistory = winningHistory;
  }

  setLottoRevenue() {
    const lottoRevenue = this.Statics.getLottoRevenue(this.winningHistory);
    this.lottoRevenue = lottoRevenue;
  }

  getLottoYield() {
    this.setLottoYield();
    return this.lottoYield;
  }

  setLottoYield() {
    this.setLottoRevenue();

    const lottoYield = this.Statics.getLottoYield(this.lottoRevenue, this.budget);
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
