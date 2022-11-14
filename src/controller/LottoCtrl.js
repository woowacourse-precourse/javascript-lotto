const {
  BUDGET_MESSAGE,
  TICKET_MESSAGE,
  WINNING_NUMBER_MESSAGE,
  TICKET_NUMBER,
  BONUS_MESSAGE,
} = require('../constants/lotto');
const GameCtrl = require('./GameCtrl');
const LottoView = require('../view/LottoView');
const LottoModel = require('../model/LottoModel');

const LottoCtrl = class extends GameCtrl {
  constructor() {
    super(new LottoView(), new LottoModel());
  }

  start() {
    this.gameProcess();
  }

  gameProcess() {
    this.inputLottoBudget();
  }

  inputLottoBudget() {
    const onInputLottoBudget = budget => {
      this.model.setLottoBudget(budget);
      this.buyLottoTicket();
    };

    this.view.input(BUDGET_MESSAGE, onInputLottoBudget);
  }

  buyLottoTicket() {
    this.getLottoCount();

    const { ticketCount } = this.model.Budget;
    const lottoTickets = [...new Array(ticketCount)].reduce(tickets => {
      const currTicket = this.model.pickLottoTickets(TICKET_NUMBER);
      tickets.push(currTicket);

      return tickets;
    }, []);

    this.model.lottoTickets = lottoTickets;
    this.renderLottoTickets(lottoTickets);

    this.inputLottoWinningNumbers();
  }

  renderLottoTickets(lottoTickets) {
    lottoTickets.forEach(ticket => {
      this.view.output(ticket);
    });
  }

  getLottoCount() {
    const ticketCount = this.model.setLottoCount();
    const ticketMessage = `${ticketCount}${TICKET_MESSAGE}`;

    this.view.output(ticketMessage);
  }

  inputLottoWinningNumbers() {
    const onGetLottoWinningNumbers = winningNumbers => {
      winningNumbers = winningNumbers.split(',');
      this.model.setLottoWinningNumbers(winningNumbers);

      this.inputLottoBonus();
    };

    this.view.input(WINNING_NUMBER_MESSAGE, onGetLottoWinningNumbers);
  }

  inputLottoBonus() {
    const onGetLottoBonus = bonus => {
      this.model.setBonusNumber(bonus);
      this.end();
    };

    this.view.input(BONUS_MESSAGE, onGetLottoBonus);
  }

  // end method
  // 1. 당첨 내역을 출력한다.
  // 2. 총 수익률을 출력한다.
  end() {}
};

module.exports = LottoCtrl;
