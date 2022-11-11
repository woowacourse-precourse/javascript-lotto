const { MESSAGES, LOTTO_LENGTH, BONUS_LENGTH } = require('../constants');

class Validator {
  static amountValidCheck(amount) {
    Validator.isBlank(amount);
    Validator.hasBlank(amount);
    amount = Number(amount);
    Validator.isNotNumber(amount);
    Validator.isNotKilo(amount);
    return amount;
  }

  static lottoValidCheck(lotto) {
    Validator.isDiffrentLottoLength(lotto);
    const validLotto = new Set();
    lotto.forEach(number => {
      Validator.basicNumberCheck(number);      
      Validator.isDuplicated(number, validLotto);
      validLotto.add(number);
    });
    return [...validLotto];
  }

  static bonusValidCheck(bonus, winningLotto) {
    Validator.isDiffrentBonusLength(bonus);
    bonus.forEach(number => {      
      Validator.basicNumberCheck(number);
      Validator.isDuplicatedBonus(number, winningLotto);
    });
    return true;
  }

  static basicNumberCheck(value) {    
    Validator.isNotNumber(value);
    Validator.isNotRange(value);
  }

  static isBlank(value) {
    if(value === '') throw new Error(MESSAGES.ERROR.isBlank);
  }
  static hasBlank(value) {
    const regex = /\s/g;    
    if(value.match(regex)) throw new Error(MESSAGES.ERROR.hasBlank);
  }
  static isNotNumber(value) {
    if(isNaN(value)) throw new Error(MESSAGES.ERROR.isNotNumber);
  }
  static isNotKilo(value) {
    if(value % 1000 !== 0) throw new Error(MESSAGES.ERROR.isNotKilo);
  }
  static isDiffrentLottoLength(value) {
    if(value.length !== LOTTO_LENGTH) throw new Error(MESSAGES.ERROR.isDiffrentLottoLength);
  }
  static isDiffrentBonusLength(value) {
    if(value.length !== BONUS_LENGTH) throw new Error(MESSAGES.ERROR.isDiffrentBonusLength);
  }
  static isNotRange(value) {
    if(value < 1 || value > 45) throw new Error(MESSAGES.ERROR.isNotRange);
  }
  static isDuplicated(value, list) {
    if(list.has(value)) throw new Error(MESSAGES.ERROR.isDuplicated);
  }
  static isDuplicatedBonus(bonus, winningLotto) {
    if(winningLotto.includes(bonus)) throw new Error(MESSAGES.ERROR.isDuplicatedBonus);
  }
}

module.exports = Validator;