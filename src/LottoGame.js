const LottoGenerator = require('./LottoGenerator');
const PlayInfo = require('./PlayInfo');

const lottoGenerator = new LottoGenerator();
const playInfo = new PlayInfo();

class LottoGame {
  issueLotto(amount) {
    lottoGenerator.generate(amount);
    playInfo.setAmount(amount);
    playInfo.setGeneratedLotto(lottoGenerator.getGeneratedLotto());
  }
}

module.exports = LottoGame;
