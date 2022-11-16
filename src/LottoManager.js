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
    if (!this.bonus) {
      throw new BonusNotFoundException();
    }
    let [cnt, isMatchedBonus] = super.match(lotto);

    if (lotto.isMatchNumber(this.bonus)) {
      cnt++;
      isMatchedBonus = true;
    }

    return [cnt, isMatchedBonus];
  }
}

class LottoManager {
  #purchaseAmount;
  #lottoUnit;
  #lottos = [];
  #winnerLotto;

  #matchResult = [];

  static PRIZES = [5000, 50000, 1500000, 30000000, 2000000000];

  constructor() {
    this.PRIZES = LottoManager.PRIZES;

    for (let i = 0; i < this.PRIZES.length; i++) {
      this.#matchResult[i] = 0;
    }
  }

  getLottoUnit() {
    return this.#lottoUnit;
  }

  getLottos() {
    return this.#lottos;
  }

  getWinnerLotto() {
    return this.#winnerLotto;
  }

  getMatchResult() {
    return this.#matchResult;
  }

  getYield() {
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
    this.#lottoUnit = parseInt(amount / Lotto.PRICE);

    for (let i = 0; i < this.#lottoUnit; i++) {
      const randomNumbers = getRandomNumbers(Lotto.RANGE[0], Lotto.RANGE[1], Lotto.SIZE);
      const lotto = new Lotto(randomNumbers);
      this.#lottos.push(lotto);
    }
  }

  /**
   * 
   * @param {number[]} numbers 
   */
  setWinnerLotto(numbers) {
    this.#winnerLotto = new WinLotto(numbers);
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
}

module.exports = LottoManager;
