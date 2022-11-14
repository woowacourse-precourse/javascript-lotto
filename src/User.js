// @ts-check

const Utils = require('./Utils.js');
const { LOTTO_PRICE } = require('./const.js');

class User {
  /** @type {number} */
  #amount;

  /** @type {number[][]} */
  #numbersList;

  /** @type {number} */
  #bonusNumber;

  /**
   *
   * @param {string} amount
   */
  validateAmount(amount) {
    const regex = /^[0-9]+$/;

    if (!regex.test(amount)) {
      throw new Error('[ERROR] 금액은 정수여야 합니다.');
    }

    if (Number(amount) % 1000 !== 0) {
      throw new Error('[ERROR] 금액은 1,000원 단위여야 합니다.');
    }
  }

  /**
   *
   * @param {string} amount
   */
  setAmount(amount) {
    this.validateAmount(amount);
    this.#amount = Number(amount);
  }

  /**
   *
   * @returns {number}
   */
  getAmount() {
    return this.#amount;
  }

  /**
   *
   * @param {number} amount
   * @returns {number[][]}
   */
  generateNumbersList(amount) {
    const list = [];

    for (let i = 0; i < amount / LOTTO_PRICE; i++) {
      const randomNumbers = Utils.getRandomNumbers(1, 45, 6);
      list.push(randomNumbers.sort((a, b) => a - b));
    }

    return list;
  }

  /**
   *
   * @param {number[][]} numbersList
   */
  setNumbersList(numbersList) {
    this.#numbersList = numbersList;
  }

  /**
   *
   * @returns {number[][]}
   */
  getNumbersList() {
    return this.#numbersList;
  }

  /**
   *
   * @param {number} bonusNumber
   * @param {number[]} lottoNumbers
   */
  validateBonusNumber(bonusNumber, lottoNumbers) {
    if (lottoNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 로또 번호에 중복이 있을 수 없습니다.');
    }
  }

  /**
   *
   * @param {number} bonusNumber
   * @param {number[]} lottoNumbers
   */
  setBonusNumber(bonusNumber, lottoNumbers) {
    this.validateBonusNumber(bonusNumber, lottoNumbers);
    this.#bonusNumber = Number(bonusNumber);
  }

  /**
   *
   * @returns {number}
   */
  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = User;
