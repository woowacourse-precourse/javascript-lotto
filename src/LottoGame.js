const LottoGenerator = require('./LottoGenerator');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const PlayInfo = require('./PlayInfo');
const GameGuide = require('./GameGuide');

const lottoGenerator = new LottoGenerator();
const playInfo = new PlayInfo();
const gameGuide = new GameGuide();

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
    playInfo.setBonusNumber(bonus.getNumber());
  }

  filterMatchNumbers({ generatedLotto, winningNumbers, bonusNumber }) {
    return generatedLotto.map((arr) =>
      arr.filter((number) => winningNumbers.includes(number) || number === bonusNumber)
    );
  }

  calculateRank(arr, bonusNumber) {
    let rank = 7 - arr.length === 1 ? 1 : 7 - arr.length + 1;

    if (rank === 1 && arr.includes(bonusNumber)) {
      return 2;
    }

    if (arr.includes(bonusNumber)) {
      return rank + 1;
    }

    return rank;
  }

  checkWinningResult() {
    const matchNumbers = this.filterMatchNumbers(playInfo.getLottoInfo());
    const result = new Array(9).fill(0);

    matchNumbers.forEach((arr) => {
      const rank = this.calculateRank(arr, playInfo.getBonusNumber());
      result[rank] += 1;
    });

    gameGuide.printWinningResult(result);
  }
}

module.exports = LottoGame;
