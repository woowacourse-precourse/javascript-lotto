const MissionUtils = require('@woowacourse/mission-utils');
const Lottos = require('./Lottos');
const Lotto = require('./Lotto');
const Calculate = require('./Calculate');
const message = require('./Message');
class User {
  constructor() {
    this.amount = '';
    this.winning_number = '';
    this.bonus_number = '';
    this.lottos = '';
  }

  setAmount(amount) {
    this.amount = amount;
  }

  setWinningNumber(winning_number) {
    this.winning_number = winning_number;
  }

  setBonusNumber(bonus_number) {
    this.bonus_number = bonus_number;
  }

  setLottos(lottos) {
    this.lottos = lottos;
  }

  input_amount() {
    MissionUtils.Console.readLine(message.INPUT_AMOUNT, amount => {
      const VALIDATION = this.validate_amount(amount);
      if (!VALIDATION) {
        throw new Error(message.AMOUNT_ERROR);
      }
      const COUNT = amount / 1000;
      this.setAmount(amount);
      MissionUtils.Console.print(`\n${COUNT}개를 구매했습니다.`);
      this.issue_lottos(COUNT);
      this.input_winning_number();
    });
    return;
  }

  issue_lottos(count) {
    const lottos = new Lottos(count);
    lottos.issue_lottos();
    this.setLottos(lottos.lottos);
  }

  validate_amount(amount) {
    let result;
    amount % 1000 === 0 ? (result = true) : (result = false);
    return result;
  }

  input_winning_number() {
    MissionUtils.Console.readLine(message.INPUT_WINNING, winning_number => {
      winning_number = winning_number.split(',');
      const VALIDATION = this.validate_winning_number(winning_number);
      if (!VALIDATION) {
        throw new Error(message.RANGE_ERROR);
      }
      const toNumbers = arr => arr.map(Number);
      this.setWinningNumber(toNumbers(winning_number));
      this.input_bonus_number();
    });
  }

  validate_winning_number(numbers) {
    new Lotto(numbers);
    let validation = true;
    if (numbers.length != 6) validation = false;
    numbers.map(number => {
      if (!(number >= 1 && number <= 45)) {
        validation = false;
      }
    });
    return validation;
  }

  input_bonus_number() {
    MissionUtils.Console.readLine(message.INPUT_BONUS, bonus_number => {
      const VALIDATION = this.validate_bonus_number(bonus_number);
      if (VALIDATION === 'outofrange') {
        throw new Error(message.BONUS_RANGE_ERROR);
      } else if (VALIDATION === 'overlap') {
        throw new Error(message.BONUS_OVERLAP_ERROR);
      }
      this.setBonusNumber(Number(bonus_number));
      this.calculate();
    });
  }

  validate_bonus_number(number) {
    let validation = true;
    if (!(number >= '1' && number <= 45)) {
      return 'outofrange';
    }
    if (this.winning_number.includes(Number(number))) {
      return 'overlap';
    }
    return validation;
  }

  calculate() {
    const CALCULATE = new Calculate(
      this.amount,
      this.winning_number,
      this.bonus_number,
      this.lottos,
    );
    CALCULATE.print_result();
    CALCULATE.calculate_profit();
  }
}

module.exports = User;
