const LottoView = require('./LottoView');

class LottoGame {
  constructor() {
    const lottoView = new LottoView();
    lottoView.getPurchaseAmount();
  }
}

module.exports = LottoGame;
