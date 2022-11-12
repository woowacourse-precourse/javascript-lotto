const LottoGenerator = require('./LottoGenerator');

const lottoGenerator = new LottoGenerator();

class LottoGame {
  issueLotto(amount) {
    lottoGenerator.generate(amount);
  }
}

module.exports = LottoGame;
