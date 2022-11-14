const BonusChecker = require('./BonusChecker');

class BonusService {
  static setBonus(rowDataOfBonus, sixNumbers) {
    BonusChecker.checkRowDataOfBonus(rowDataOfBonus);
    const bonus = parseInt(rowDataOfBonus, 10);
    BonusChecker.checkBonus(bonus, sixNumbers);

    return bonus;
  }
}

module.exports = BonusService;
