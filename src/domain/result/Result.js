const Prize = require('./Prize');

class Result {
  #prizes = new Map();

  constructor(lottoTicket, winningLotto) {
    this.prize = new Map();
    this.lottoTicket = lottoTicket;
    this.winningLotto = winningLotto;
  }

  getProfit() {

  }
}

module.exports = Result;
