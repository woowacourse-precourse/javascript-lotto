const { LOTTO_INFO, LOTTO_MATCH, PRIZE_MONEY } = require('../common/constants');
const { calculateLottoQuantity } = require('../utils/calculator');
const { Random } = require('../utils/missionUtil');
const { INPUT_MESSAGES } = require('../common/messages');
const LottoView = require('../view/LottoView');
const User = require('../User');
const Lotto = require('../Lotto');
const Validator = require('../Validator');

class LottoGame {
  #winNumbers;
  #bonusNumber;

  constructor() {
    this.user = new User();
  }

  start() {
    LottoView.getUserInput(`${INPUT_MESSAGES.AMOUNT}\n`, (money) => {
      Validator.checkValidMoneyBundle(money);
      this.user.setMoney(money);
      this.exchangeLottos(money);
      this.showPurchaseLottoInfo();
      this.drawWinLottoNumbers();
    });
  }

  exchangeLottos(money) {
    this.setupPurchaseLottoInfo(this.countLottos(money));
  }

  countLottos(money) {
    return calculateLottoQuantity(money);
  }

  setupPurchaseLottoInfo(lottoQuantity) {
    this.user.setLottoQuantity(lottoQuantity);
    this.user.setLottos(LottoGame.makeLottos(lottoQuantity));
  }

  setupWinLottoNumberInfo(winLottoNumber) {
    this.#winNumbers = winLottoNumber;
  }

  setupBonusNumberInfo(bonusLottoNumber) {
    this.#bonusNumber = bonusLottoNumber;
  }

  showPurchaseLottoInfo() {
    LottoView.printLottoQuantity(this.user.getLottoQuantity());
    LottoView.printUserLottos(this.user.getLottos());
  }

  static generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_INFO.BEGIN_NUMBER,
      LOTTO_INFO.END_NUMBER,
      LOTTO_INFO.COUNT
    ).sort((a, b) => a - b);
  }

  static makeLottos(lottoQuantity) {
    const lottos = [];
    for (let i = 0; i < lottoQuantity; i++) {
      const lotto = new Lotto(LottoGame.generateLottoNumbers());
      lottos.push(lotto.getLotto());
    }
    return lottos;
  }

  drawWinLottoNumbers() {
    LottoView.getUserInput(`\n${INPUT_MESSAGES.WINNER_NUMBER}\n`, (winNumbers) => {
      Validator.checkWinNumbersBundle(winNumbers);
      this.setupWinLottoNumberInfo(winNumbers);
      this.drawBonusNumber();
    });
  }

  drawBonusNumber() {
    LottoView.getUserInput(`\n${INPUT_MESSAGES.BONUS_NUMBER}\n`, (bonusNumber) => {
      this.setupBonusNumberInfo(bonusNumber);
      Validator.checkValidBonusNumberBundle(bonusNumber);
      Validator.checkDuplicateBonusNumber(this.#winNumbers, bonusNumber);
      this.showStats();
    });
  }

  showStats() {
    LottoView.printStatsMessage();
    this.#compareLottoNumbers();
    LottoView.printMatchNumbers(this.user.getCorrectLottoCount());
    LottoView.printRate(this.calculateRate(this.getUserLottoPurchaseInfo()));
  }

  #compareLottoNumbers() {
    const userLottos = this.user.getLottos();
    userLottos.forEach((lotto) => {
      const correctLottoCount = this.countCorrectLottoNumbers(lotto);
      const hasBonusNumber = this.hasBonusLottoNumber(this.#bonusNumber, lotto);
      this.#increaseCorrectLottoCount(correctLottoCount, hasBonusNumber);
    });
  }

  #increaseCorrectLottoCount(correctLottoCount, hasBonusNumber) {
    if (correctLottoCount === LOTTO_MATCH.THREE) {
      this.user.setCorrectLottoCount('three');
    }
    if (correctLottoCount === LOTTO_MATCH.FOUR) {
      this.user.setCorrectLottoCount('four');
    }
    if (correctLottoCount === LOTTO_MATCH.FIVE && !hasBonusNumber) {
      this.user.setCorrectLottoCount('five');
    }
    if (correctLottoCount === LOTTO_MATCH.FIVE && hasBonusNumber) {
      this.user.setCorrectLottoCount('bonus');
    }
    if (correctLottoCount === LOTTO_MATCH.SIX) {
      this.user.setCorrectLottoCount('six');
    }
  }

  countCorrectLottoNumbers(userLottoNumbers) {
    let count = 0;
    const winNumbers = this.#winNumbers.split(',').map(Number);
    winNumbers.forEach((winNumber) => {
      if (userLottoNumbers.includes(winNumber)) {
        count += 1;
      }
    });
    return count;
  }

  hasBonusLottoNumber(bonusNumber, userLottoNumbers) {
    return userLottoNumbers.includes(Number(bonusNumber));
  }

  getUserLottoPurchaseInfo() {
    const amountPaid = this.user.getMoney();
    const correctLottos = this.user.getCorrectLottoCount();
    return [amountPaid, correctLottos];
  }

  calculateRate([amountPaid, correctLottos]) {
    let totalRate = 0;
    Object.entries(correctLottos).forEach(([matchingNumbers, count]) => {
      if (count) {
        totalRate += ((PRIZE_MONEY[matchingNumbers] * count) / amountPaid) * 100;
      }
    });
    totalRate = Number(totalRate).toFixed(1);
    return totalRate;
  }
}

module.exports = LottoGame;
