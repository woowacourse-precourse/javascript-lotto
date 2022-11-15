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
    this.purchasedLottos = [];
    this.winningNumbers;
    this.bonusNumber;
    this.winningResult = [];
    this.winningLottosQuantity = [null, 0, 0, 0, 0, 0];
    this.inputView = new InputView(this);
    this.outputView = new OutputView(this);
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
      let numbers = new NumberCreator().getRandomSixNumbers();
      this.purchasedLottos.push(new Lotto(numbers).getLottoNumbers());
      count += 1;
    }

    this.outputView.printLottosQuantity(this.lottosQuantity);
    this.outputView.printPurchasedLottos(this.purchasedLottos);
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

    this.outputView.printWinningResult(this.winningLottosQuantity);
    this.setRateOfReturn();
  }

  setRateOfReturn() {
    let rateOfReturn = new RateOfReturn(
      this.winningLottosQuantity,
      this.lottosQuantity
    ).getRateOfReturn();

    this.outputView.printRateOfReturn(rateOfReturn);
    this.close();
  }

  close() {
    close();
  }
}

module.exports = LottoGame;
