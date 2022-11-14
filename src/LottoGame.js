const LottoGenerator = require('./LottoGenerator');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const PlayInfo = require('./PlayInfo');
const GameGuide = require('./GameGuide');

const lottoGenerator = new LottoGenerator();
const playInfo = new PlayInfo();
const gameGuide = new GameGuide();

const winningPrize = [0, 2000000000, 30000000, 1500000, 50000, 5000, 0, 0, 0];

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

    playInfo.setWinningStats(result);
    gameGuide.printWinningResult(result);
  }

  calculateRateOfReturn(amount, result) {
    const totalPrize = result.reduce((acc, cur, idx) => acc + cur * winningPrize[idx], 0);
    const rateOfReturn = ((totalPrize / amount) * 100).toFixed(1);

    gameGuide.printRateOfReturn(rateOfReturn);
  }

  fetchGameResult() {
    this.checkWinningResult();
    this.calculateRateOfReturn(playInfo.getAmount(), playInfo.getWinningStats());
  }
}

module.exports = LottoGame;
