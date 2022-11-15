const {
  BUDGET_MESSAGE,
  TICKET_MESSAGE,
  WINNING_NUMBER_MESSAGE,
  TICKET_NUMBER,
  BONUS_MESSAGE,
  LOTTO_RANK,
  STATIC_MESSAGE,
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
    const ticketCount = this.getLottoCount();

    const lottoTickets = [...new Array(ticketCount)].reduce(tickets => {
      const currTicket = this.model.pickLottoTickets(TICKET_NUMBER);
      tickets.push(currTicket);

      return tickets;
    }, []);

    this.model.setLottoTickets(lottoTickets);
    this.renderLottoTickets(lottoTickets);

    this.inputLottoWinningNumbers();
  }

  renderLottoTickets(lottoTickets) {
    lottoTickets.forEach(ticket => {
      this.view.output(`[${ticket.join(', ')}]`);
    });
  }

  getLottoCount() {
    const ticketCount = this.model.setLottoCount();
    const ticketMessage = `${ticketCount}${TICKET_MESSAGE}`;

    this.view.output(ticketMessage);
    return ticketCount;
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
    const winningHistory = this.model.getLottoWinningHistory();
    const lottoYield = this.model.getLottoYield();

    this.renderLottoStatics(winningHistory, lottoYield);
    this.view.close();
  }

  renderLottoStatics(winningHistory, lottoYield) {
    const { MESSAGE } = LOTTO_RANK;

    const resultMessages = Object.entries(MESSAGE)
      .reverse()
      .map(([key, value]) => `${value}${winningHistory[key]}개`)
      .concat(`총 수익률은 ${lottoYield}%입니다.`);

    this.view.output(STATIC_MESSAGE);
    resultMessages.forEach(message => this.view.output(message));
  }
};

module.exports = LottoCtrl;
