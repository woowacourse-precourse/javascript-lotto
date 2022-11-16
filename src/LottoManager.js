const Lotto = require("./Lotto");
const { 
  getRandomNumbers,
  getCashFlow,
  getYield
} = require("./utils");
const {
  PurchaseException,
  BonusNotFoundException
} = require("./exceptions");

class WinLotto extends Lotto {
  bonus = null;

  /**
   * 
   * @param {number[]} numbers 로또 번호
   * @param {number | undefined} bonus 보너스 번호
   */
   constructor(numbers, bonus) {
    super(numbers);

    if (bonus) {
      this.setBonus(bonus);
    }
  }

  setBonus(num) {
    this.validateNumber(num);
    this.bonus = num;
  }

  match(lotto) {
    if (!this.hasBonus()) {
      throw new BonusNotFoundException();
    }
    let [cnt, isMatchedBonus] = super.match(lotto);

    if (lotto.isMatchNumber(this.bonus)) {
      cnt++;
      isMatchedBonus = true;
    }

    return [cnt, isMatchedBonus];
  }

  hasBonus() {
    if (!this.bonus) {
      return false;
    }
    return true;
  }
}

class LottoManager {
  #purchaseAmount;
  #winnerLotto;

  #matchResult = [];

  lottoUnit = 0;
  lottos = [];

  static PRIZES = [5000, 50000, 1500000, 30000000, 2000000000];

  constructor() {
    this.PRIZES = LottoManager.PRIZES;

    for (let i = 0; i < this.PRIZES.length; i++) {
      this.#matchResult[i] = 0;
    }
  }

  /**
   * 
   * @returns {number[]}
   */
  result() {
    return this.#matchResult;
  }

  yield() {
    const current = getCashFlow(this.PRIZES, this.#matchResult);
    return getYield(current, this.#purchaseAmount);
  }

  setBoard(count, isMatchedBonus) {
    let copy = [...this.#matchResult];
    switch (count) {
      case 3:
        copy[0] += 1;
        break;
      case 4:
        copy[1] += 1;
        break;
      case 5:
        if (isMatchedBonus) {
          copy[3] += 1;
          break;
        }
        copy[2] += 1;
        break;
      case 6:
        copy[4] += 1;
    }
    this.#matchResult = copy;
  }

  /**
   * @param {number} amount 로또 구입 금액
   * @returns {void}
   */
  exchangeLotto(amount) {
    if (!this.isValidPurchase(amount)) { throw new PurchaseException(); }
    this.#purchaseAmount = amount;
    this.lottoUnit = parseInt(amount / Lotto.PRICE);

    for (let i = 0; i < this.lottoUnit; i++) {
      const randomNumbers = getRandomNumbers(Lotto.RANGE[0], Lotto.RANGE[1], Lotto.SIZE);
      const lotto = new Lotto(randomNumbers);
      this.lottos.push(lotto);
    }
  }

  /**
   * 
   * @param {number[]} numbers 
   */
  setWinnerLotto(numbers) {
    this.#winnerLotto = new WinLotto(numbers);
  }

  setBonusNumber(num) {
    this.#winnerLotto.setBonus(num);
  }

  /**
   * 
   * @param {number} amount 
   * @returns {boolean}
   */
  isValidPurchase(amount) {
    if (amount % Lotto.PRICE !== 0) {
      return false;
    }
    return true;
  }

  run() {
    this.validateRun();

    for (const lotto of this.lottos) {
      const [count, isMatchedBonus] = this.#winnerLotto.match(lotto);
      
      this.setBoard(count, isMatchedBonus);
    }

    return this;
  }

  validateRun() {
    if (!this.#winnerLotto) {
      throw Error('[ERROR] Cannot run manager because winnerLotto does not set.');
    }

    if (!this.#winnerLotto.hasBonus()) {
      throw Error('[ERROR] Cannot run manager because bonus number does not set.')
    }
  }
}

module.exports = LottoManager;
