const MissionUtils = require('@woowacourse/mission-utils');
const Lottos = require('./Lottos');
const Lotto = require('./Lotto');
const Calculate = require('./Calculate');
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
    MissionUtils.Console.readLine('구입 금액을 입력해 주세요\n', amount => {
      const VALIDATION = this.validate_amount(amount);
      if (!VALIDATION) {
        throw new Error('[ERROR] 구입 금액은 1000의 단위 숫자여야 합니다.');
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
    MissionUtils.Console.readLine(
      '\n당첨 번호를 입력해 주세요.\n',
      winning_number => {
        winning_number = winning_number.split(',');
        const VALIDATION = this.validate_winning_number(winning_number);
        if (!VALIDATION) {
          throw new Error('[Error] 로또 번호는 1~45 사이의 6자리 숫자입니다.');
        }
        const toNumbers = arr => arr.map(Number);
        this.setWinningNumber(toNumbers(winning_number));
        this.input_bonus_number();
      },
    );
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
    MissionUtils.Console.readLine(
      '\n보너스 번호를 입력해 주세요.\n',
      bonus_number => {
        const VALIDATION = this.validate_bonus_number(bonus_number);
        if (VALIDATION === 'outofrange') {
          throw new Error('[Error] 보너스 번호는 1~45 사이의 숫자입니다.');
        } else if (VALIDATION === 'overlap') {
          throw new Error(
            '[Error] 보너스 번호는 당첨번호와 일치할 수 없습니다.',
          );
        }
        this.setBonusNumber(Number(bonus_number));
        this.calculate();
      },
    );
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
