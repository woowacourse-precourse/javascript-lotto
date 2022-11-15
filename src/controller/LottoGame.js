const LottoQuantity = require('../model/LottoQuantity');
const NumberCreator = require('./NumberCreator');
const Lotto = require('../model/Lotto');
const BonusNumber = require('../model/BonusNumber');
const WinningRank = require('../model/WinningRank');
const RateOfReturn = require('../model/RateOfReturn');
const { close } = require('../utils/utils');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class LottoGame {
  constructor() {
    this.lottosQuantity;
    this.winningNumbers;
    this.bonusNumber;
    this.purchasedLottos = [];
    this.winningResult = [];
    this.winningLottosQuantity = [null, 0, 0, 0, 0, 0];
    this.inputView = new InputView(this);
  }

  init() {
    this.inputView.inputCash();
  }

  setLottosQuantity(cash) {
    this.lottosQuantity = new LottoQuantity(cash).getLottosQuantity();
    this.setPurchasedLottos();
  }

  setPurchasedLottos() {
    let count = 0;
    while (count !== this.lottosQuantity) {
      let numbers = NumberCreator.getRandomSixNumbers();
      this.purchasedLottos.push(new Lotto(numbers).getLottoNumbers());
      count += 1;
    }

    OutputView.printLottosQuantity(this.lottosQuantity);
    OutputView.printPurchasedLottos(this.purchasedLottos);
    this.inputView.inputWinningNumbers();
  }

  setWinningNumbers(numbers) {
    numbers = Array.from(numbers.split(','), (num) => Number(num));
    this.winningNumbers = new Lotto(numbers).getLottoNumbers();
    this.inputView.inputBonusNumber();
  }

  setBonusNumber(bonusNumber) {
    let newBonusNumber = new BonusNumber(bonusNumber, this.winningNumbers);
    this.bonusNumber = newBonusNumber.getBonusNumber();
    this.setWinningResult();
  }

  setWinningResult() {
    this.purchasedLottos.forEach((lottoNumbers) => {
      let winningRank = new WinningRank(
        lottoNumbers,
        this.winningNumbers,
        this.bonusNumber
      );
      this.winningResult.push(winningRank.getWinningRank());
    });

    this.countWinningLottos();
  }

  countWinningLottos() {
    this.winningResult.forEach((rank) => {
      this.winningLottosQuantity[rank] += 1;
    });

    OutputView.printWinningResult(this.winningLottosQuantity);
    this.setRateOfReturn();
  }

  setRateOfReturn() {
    let rateOfReturn = new RateOfReturn(
      this.winningLottosQuantity,
      this.lottosQuantity
    ).getRateOfReturn();
    OutputView.printRateOfReturn(rateOfReturn);
    LottoGame.close();
  }

  static close() {
    close();
  }
}

module.exports = LottoGame;
