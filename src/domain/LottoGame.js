const { LOTTO_INFO, LOTTO_MATCH, PRIZE_MONEY } = require('../common/constants');
const { lottoCount } = require('../utils/calculator');
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
      Validator.checkValidMoney(money);
      this.user.setMoney(money);
      this.countLottos(money);
    });
  }

  static generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_INFO.BEGIN_NUMBER,
      LOTTO_INFO.END_NUMBER,
      LOTTO_INFO.COUNT
    ).sort((a, b) => a - b);
  }

  makeLottos(lottoCount) {
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lotto = new Lotto(LottoGame.generateLottoNumbers());
      lottos.push(lotto.getLotto());
    }
    return lottos;
  }

  countLottos(money) {
    this.user.setLottoCount(lottoCount(money));
    this.user.setLottos(this.makeLottos(this.user.getLottoCount()));
    LottoView.printLottoCount(this.user.getLottoCount());
    LottoView.printUserLottos(this.user.getLottos());
    this.createWinLottoNumbers();
  }

  createWinLottoNumbers() {
    LottoView.getUserInput(`\n${INPUT_MESSAGES.WINNER_NUMBER}\n`, (winNumbers) => {
      Validator.checkWinNumbers(winNumbers);
      this.#winNumbers = winNumbers;
      this.createWinBonusNumber();
    });
  }

  createWinBonusNumber() {
    LottoView.getUserInput(`\n${INPUT_MESSAGES.BONUS_NUMBER}\n`, (bonusNumber) => {
      this.#bonusNumber = bonusNumber;
      LottoView.printStatsMessage();
      Validator.checkValidBonusNumber(bonusNumber);
      Validator.checkBonusNumberRange(bonusNumber);
      Validator.checkDuplicateBonusNumber(this.#winNumbers, bonusNumber);
      this.#matchLottos();
    });
  }

  #matchLottos() {
    const userLottos = this.user.getLottos();
    userLottos.forEach((lotto) => {
      const lottoCount = this.#countMatchLottoNumbers(lotto);
      const hasBonusNumber = this.#hasBonusLottoNumber(this.#bonusNumber, lotto);
      this.#addMatchLottos(lottoCount, hasBonusNumber);
    });
    LottoView.printMatchNumbers(this.user.getMatchLottos());
    this.#calculateRate();
  }

  #addMatchLottos(lottoCount, hasBonusNumber) {
    if (lottoCount === LOTTO_MATCH.THREE) {
      this.user.setMatchLottos('three');
    }
    if (lottoCount === LOTTO_MATCH.FOUR) {
      this.user.setMatchLottos('four');
    }
    if (lottoCount === LOTTO_MATCH.FIVE && !hasBonusNumber) {
      this.user.setMatchLottos('five');
    }
    if (lottoCount === LOTTO_MATCH.FIVE && hasBonusNumber) {
      this.user.setMatchLottos('bonus');
    }
    if (lottoCount === LOTTO_MATCH.SIX) {
      this.user.setMatchLottos('six');
    }
  }

  #countMatchLottoNumbers(userLottoNumbers) {
    let count = 0;
    const winNumbers = this.#winNumbers.split(',').map(Number);
    winNumbers.forEach((winNumber) => {
      if (userLottoNumbers.includes(winNumber)) {
        count += 1;
      }
    });
    return count;
  }

  #hasBonusLottoNumber(bonusNumber, userLottoNumbers) {
    userLottoNumbers.includes(Number(bonusNumber));
  }

  #calculateRate() {
    const amountPaid = this.user.getMoney();
    const matchLottos = this.user.getMatchLottos();
    let totalRate = 0;
    Object.entries(matchLottos).forEach(([matchingNumbers, count]) => {
      if (count) {
        totalRate += ((PRIZE_MONEY[matchingNumbers] * count) / amountPaid) * 100;
      }
    });
    totalRate = Number(totalRate).toFixed(1);
    LottoView.printRate(totalRate);
  }
}

module.exports = LottoGame;
