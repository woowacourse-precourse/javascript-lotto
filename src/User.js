const MissionUtils = require('@woowacourse/mission-utils');
class User {
  constructor() {
    this.amount = '';
    this.winning_number = '';
    this.bonus_number = '';
  }
}

module.exports = User;
const user = new User();

// User 클래스
//  로또 구입 금액 입력 (O)
//  예외처리 (1) 구입 금액 입력값이 1000으로 나누어 떨어지지 않으면 예외처리
//  당첨번호 입력
//  보너스번호 입력
//  예외처리 (2) 당첨/보너스 번호 입력값이 1 ~ 45 사이의 숫자 6개가 아닌 경우 예외 처리
//  예외처리 시, [ERROR]로 시작하는 에러 메시지 출력
