const {
  BUDGET_MESSAGE,
  TICKET_MESSAGE,
  WINNING_NUMBER_MESSAGE,
  TICKET_NUMBER,
  BONUS_MESSAGE,
  LOTTO_RANK,
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
      winningNumbers = winningNumbers.split(',').map(number => Number(number));
      this.model.setLottoWinningNumbers(winningNumbers);

      this.inputLottoBonus();
    };

    this.view.input(WINNING_NUMBER_MESSAGE, onGetLottoWinningNumbers);
  }

  inputLottoBonus() {
    const onGetLottoBonus = bonus => {
      bonus = Number(bonus);

      this.model.setBonusNumber(bonus);
      this.end();
    };

    this.view.input(BONUS_MESSAGE, onGetLottoBonus);
  }

  end() {
    this.getLottoWinningHistory();

    this.view.close();
  }

  getLottoWinningHistory() {
    const { lottoTickets, winningNumbers, bonus } = this.model;

    const winningHistory = lottoTickets.reduce((winningHistory, currTicket) => {
      const intersectionSize = currTicket.filter(number => winningNumbers.includes(number)).length;

      switch (intersectionSize) {
        case 6:
          winningHistory[1] += 1;
          return winningHistory;

        case 5:
          const isBonus = currTicket.includes(bonus);
          const rank = isBonus === true ? 2 : 3;
          winningHistory[rank] += 1;
          return winningHistory;

        case 4:
          winningHistory[4] += 1;
          return winningHistory;

        case 3:
          winningHistory[5] += 1;
          return winningHistory;

        default:
          return winningHistory;
      }
    }, [...new Array(6)].fill(0));

    this.model.winningHistory = winningHistory;
  }

  // 2. 총 수익률을 출력한다.
  getLottoYield() {}
};

module.exports = LottoCtrl;
