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

  check_validation(amount) {
    let result;
    amount % 1000 === 0 ? (result = true) : (result = false);
    return result;
  }

  input_winning_number() {
    MissionUtils.Console.readLine(
      '\n당첨 번호를 입력해 주세요.\n',
      winning_number => {
        winning_number = winning_number.split(',');
        this.setWinningNumber(winning_number);
      },
    );
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

// User 클래스
//  로또 구입 금액 입력 (O)
//  예외처리 (1) 구입 금액 입력값이 1000으로 나누어 떨어지지 않으면 예외처리 (O)
//  당첨번호 입력
//  보너스번호 입력
//  예외처리 (2) 당첨/보너스 번호 입력값이 1 ~ 45 사이의 숫자 6개가 아닌 경우 예외 처리
//  예외처리 시, [ERROR]로 시작하는 에러 메시지 출력
