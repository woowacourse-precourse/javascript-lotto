const {
  BUDGET_MESSAGE,
  TICKET_MESSAGE,
  WINNING_NUMBER_MESSAGE,
  TICKET_NUMBER,
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
    this.view.output(lottoTickets);

    this.inputLottoWinningNumbers();
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

  // 4. 유저로부터 보너스 번호를 입력받는다.

  // end method
  // 1. 당첨 내역을 출력한다.
  // 2. 총 수익률을 출력한다.
  end() {}
};

module.exports = LottoCtrl;
