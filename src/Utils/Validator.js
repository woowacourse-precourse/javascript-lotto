const { MESSAGES, LOTTO_BASIC_CONDITION } = require('../constants');

class Validator {
  static amountValidCheck(amount) {
    Validator.#isBlank(amount);
    Validator.#hasBlank(amount);
    const convertedAmount = Number(amount);
    Validator.#isNotNumber(convertedAmount);
    Validator.#isNotKilo(convertedAmount);
  }

  static lottoValidCheck(lotto) {
    Validator.#isDiffrentLottoLength(lotto);
    const validLotto = new Set();
    lotto.forEach(number => {
      Validator.#basicNumberCheck(number);      
      Validator.#isDuplicated(number, validLotto);
      validLotto.add(number);
    });
  }

  static bonusValidCheck(bonus, winningLotto) {
    Validator.#isDiffrentBonusLength(bonus);
    bonus.forEach(number => {      
      Validator.#basicNumberCheck(number);
      Validator.#isIncludedBonus(number, winningLotto);
    });
  }

  static #basicNumberCheck(value) {    
    Validator.#isNotNumber(value);
    Validator.#isNotRange(value);
    Validator.#isDemical(value);
  }

  static #isBlank(value) {
    if(value === '') throw new Error(MESSAGES.ERROR.IS_BLANK);
  }
  
  static #hasBlank(value) {
    const regex = /\s/g;    
    if(value.match(regex)) throw new Error(MESSAGES.ERROR.HAS_BLANK);
  }
  
  static #isNotNumber(value) {
    if(Number.isNaN(value)) throw new Error(MESSAGES.ERROR.IS_NOT_NUMBER);
  }
  
  static #isDemical(value) {
    if(value % 1 !== 0) throw new Error(MESSAGES.ERROR.IS_DEMICAL);
  }
  
  static #isNotKilo(value) {
    if(value % 1000 !== 0) throw new Error(MESSAGES.ERROR.IS_NOT_KILO);
  }
  
  static #isDiffrentLottoLength(value) {
    if(value.length !== LOTTO_BASIC_CONDITION.length) throw new Error(MESSAGES.ERROR.IS_DIFFRENT_LOTTO_LENGTH);
  }
  
  static #isDiffrentBonusLength(value) {
    if(value.length !== LOTTO_BASIC_CONDITION.bonusLength) throw new Error(MESSAGES.ERROR.IS_DIFFRENT_BONUS_LENGTH);
  }
  
  static #isNotRange(value) {
    if(value < 1 || value > 45) throw new Error(MESSAGES.ERROR.IS_NOT_RANGE);
  }
  
  static #isDuplicated(value, list) {
    if(list.has(value)) throw new Error(MESSAGES.ERROR.IS_DUPLICATED);
  }
  
  static #isIncludedBonus(bonus, winningLotto) {
    if(winningLotto.includes(bonus)) throw new Error(MESSAGES.ERROR.IS_INCLUDED_BONUS);
  }
}

module.exports = Validator;