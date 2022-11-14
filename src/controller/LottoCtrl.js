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
      this.view.output(ticket);
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
    const winningHistory = this.getLottoWinningHistory();
    const lottoYield = this.getLottoYield();

    this.renderLottoStatics(winningHistory, lottoYield);
    this.view.close();
  }

  // TODO: 통계 로직 분리 -> Statics 클래스
  renderLottoStatics(winningHistory, lottoYield) {
    const { MESSAGE } = LOTTO_RANK;

    this.view.output('당첨 통계');
    this.view.output('---');

    const resultMessages = Object.entries(MESSAGE)
      .reverse()
      .map(([key, value]) => `${value}${winningHistory[key]}개`)
      .concat(`총 수익률은 ${lottoYield}%입니다.`);

    resultMessages.forEach(message => this.view.output(message));
  }

  getLottoWinningHistory() {
    const { lottoTickets, winningNumbers, bonus } = this.model;

    const initWinningHistory = [...new Array(6)].fill(0);
    const winningHistory = lottoTickets.reduce((winningHistory, currTicket) => {
      // TODO: 로또 등수 구하는 로직 분리 = getLottoRank
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
    }, initWinningHistory);

    this.model.setLottoWinnerHistory(winningHistory);
    return winningHistory;
  }

  getLottoRank() {}

  getLottoYield() {
    const lottoRevenue = this.getLottoRevenue();
    const { budget } = this.model;

    const lottoYield = (lottoRevenue / budget) * 100;

    this.model.setLottoYield(lottoYield);
    return lottoYield;
  }

  getLottoRevenue() {
    const { winningHistory } = this.model;
    const { REWARD } = LOTTO_RANK;

    const lottoRevenue = winningHistory.reduce((lottoRevenue, rankCount, rank) => {
      const currRankReward = REWARD[rank] ?? 0;
      const currRankRevenue = rankCount * currRankReward;

      lottoRevenue += currRankRevenue;
      return lottoRevenue;
    }, 0);

    this.model.setLottoRevenue(lottoRevenue);
    return lottoRevenue;
  }
};

module.exports = LottoCtrl;
