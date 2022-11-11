const MissionUtils = require('@woowacourse/mission-utils');
class User {
  constructor() {
    this.amount = '';
    this.winning_number = '';
    this.bonus_number = '';
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

  input_amount() {
    MissionUtils.Console.readLine('구입 금액을 입력해 주세요\n', amount => {
      //입력값 확인
      const VALIDATION = this.check_validation(amount);
      //예외처리
      if (!VALIDATION) {
        throw new Error('[ERROR] 구입 금액은 1000의 단위 숫자여야 합니다.');
      }
      const COUNT = amount / 1000;
      this.setAmount(amount);
      return MissionUtils.Console.print(`\n${COUNT}개를 구매했습니다.`);
      //예외가 아닐 경우 -> 몇개 구매한건지 계산
    });
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
          throw new Error('[Error] 롯또 번호는 1~45 사이의 숫자입니다.');
        }
        this.setWinningNumber(winning_number);
        console.log(this.winning_number);
      },
    );
  }

  validate_winning_number(numbers) {
    let validation = true;
    numbers.map(number => {
      if (!(number >= '1' && number <= 45)) {
        validation = false;
      }
    });
    return validation;
  }

  input_bonus_number() {
    MissionUtils.Console.readLine(
      '\n보너스 번호를 입력해 주세요.\n',
      bonus_number => {
        this.setBonusNumber(bonus_number);
      },
    );
  }
}

module.exports = User;
const user = new User();
user.input_winning_number();
