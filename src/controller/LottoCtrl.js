const { BUDGET_MESSAGE, TICKET_MESSAGE } = require('../constants/lotto');
const GameCtrl = require('./GameCtrl');
const LottoView = require('../view/LottoView');
const LottoModel = require('../model/LottoModel');

const LottoCtrl = class extends GameCtrl {
  constructor() {
    super(new LottoView(), new LottoModel());
  }

  start() {
    this.view.input(BUDGET_MESSAGE, this.gameProcess.bind(this));
  }

  // 1. 유저로부터 로또 구입 금액을 입력받는다. ✅
  gameProcess(budget) {
    this.budget = Number(budget);
    this.model.setLottoBudget(this.budget);

    this.buyLottoTicket();
  }

  // 2. 컴퓨터에서 자동으로 로또 개수만큼 로또를 구입한다. ✅
  buyLottoTicket() {
    this.setLottoCount();

    const lottoTickets = [...new Array(this.ticketCount)].reduce(tickets => {
      const currTicket = this.model.pickLottoTickets(1, 45, 6);
      tickets.push(currTicket);

      return tickets;
    }, []);

    this.view.output(lottoTickets);
    this.lottoTickets = lottoTickets;
  }

  setLottoCount() {
    this.ticketCount = this.model.setLottoCount();
    const ticketMessage = `${this.ticketCount}${TICKET_MESSAGE}`;

    this.view.output(ticketMessage);
  }

  // 3. 유저로부터 로또 당첨 번호를 입력받는다.
  // 4. 유저로부터 보너스 번호를 입력받는다.

  // end method
  // 1. 당첨 내역을 출력한다.
  // 2. 총 수익률을 출력한다.
  end() {}
};

module.exports = LottoCtrl;
