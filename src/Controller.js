const InputView = require('../src/View/InputView')
const OutputView = require('../src/View/OutputView')
const Lotto = require('../src/Lotto')
const {Console} = require("@woowacourse/mission-utils");
const {generate} = require('../src/LottoRandomNumberGenerator')

class Controller {
  constructor() {
    this.lotto = new Lotto()
    this.lottoQuantity
    this.userLottoList
    this.lottoResult
    this.winningLotto
    this.bonusNum
  }
  askLottoPurchaseAmount() {
    InputView.readLottoPurchaseAmount(this.getLottoQuantity.bind(this));
  }

  getLottoQuantity(amount) {
    this.lottoQuantity = this.lotto.purchaseQuantity(amount)
    this.printPurchaseQuantity()
  }

  printPurchaseQuantity() {
    OutputView.purchaseQuantity(this.lottoQuantity)
    this.printUserLotto()
  }

  printUserLotto() {
    this.userLottoList = this.lotto.lottomaker(this.lottoQuantity,generate)
    this.userLottoList.forEach((lottoList) => {
    let printLottoList = lottoList.join().split(',').join(', ')
    Console.print(`[${printLottoList}]`)
    })
    this.askWinningLottoNumbers()
  }

  askWinningLottoNumbers() {
    InputView.readWinningNumbers(this.saveWinnginNumers.bind(this));
  }

  askBonusNumber() {
    InputView.readBonusNumber(this.saveBonusNumber.bind(this));
  }

  saveWinnginNumers(winningNums) {
    this.winningLotto = winningNums ;
    this.askBonusNumber()
  }
  
  saveBonusNumber(bonusNum) {
    this.bonusNum = bonusNum
    this.printResult()
  }

  printResult() {
    this.lottoResult = this.lotto.findMatchCount(this.winningLotto,this.bonusNum);
    OutputView.resultMap(this.lottoResult)
    this.printRateOfReturn()
  }

  printRateOfReturn() {
    const profit = 
  }

}

module.exports = Controller