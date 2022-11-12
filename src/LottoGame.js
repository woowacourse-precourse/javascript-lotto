const LottoGenerator = require('./LottoGenerator');
const Lotto = require('./Lotto');
const PlayInfo = require('./PlayInfo');

const lottoGenerator = new LottoGenerator();
const playInfo = new PlayInfo();

class LottoGame {
  issueLotto(amount) {
    lottoGenerator.generate(amount);
    playInfo.setAmount(amount);
    playInfo.setGeneratedLotto(lottoGenerator.getGeneratedLotto());
  }

  drawLotto(numbers) {
    const lotto = new Lotto(numbers);
  }
}

module.exports = LottoGame;
