class Message {
  static START_MESSAGE = '구입금액을 입력해 주세요.';
  static PURCHASE_MESSAGE = '개를 구매했습니다';
  static PRIZENUMBER_MESSAGE = '당첨 번호를 입력해 주세요.';
  static BONUSNUMBER_MESSAGE = '보너스 번호를 입력해 주세요.';
  static CORRECT3_MESSAGE = '3개 일치 (5,000원) - ';
  static CORRECT4_MESSAGE = '4개 일치 (50,000원) - ';
  static CORRECT5_MESSAGE = '5개 일치 (1,500,000원) - ';
  static CORRECT5_BONUS_MESSAGE = '5개 일치, 보너스 볼 일치 (30,000,000원) - ';
  static CORRECT6_MESSAGE = '6개 일치 (2,000,000,000원) - ';
  static ERROR_MONEY = '[ERROR] 구매할 금액은 1000단위의 숫자여야 합니다';
}

module.exports = Message;
