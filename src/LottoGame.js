const LottoGenerator = require('./LottoGenerator');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
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
    playInfo.setWinningNumbers(lotto.getNumbers());
  }

  drawBonus(number) {
    const numbers = playInfo.getWinningNumbers();
    const bonus = new Bonus(number);

    bonus.isBelong(numbers);
  }
}

module.exports = LottoGame;
