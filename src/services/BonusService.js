const BonusChecker = require('./BonusChecker');
const Parser = require('../utils/Parser');

class BonusService {
  static setBonus(rowDataOfBonus, sixNumbers) {
    BonusChecker.checkRowDataOfBonus(rowDataOfBonus);
    const bonus = Parser.convertStringToDecimalNumber(rowDataOfBonus);
    BonusChecker.checkBonus(bonus, sixNumbers);

    return bonus;
  }
}

module.exports = BonusService;
