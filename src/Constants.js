const MESSAGES = {
  PAYMENT: '구입금액을 입력해 주세요.\n',
  SET_LOTTO: '당첨 번호를 입력해 주세요.\n',
  SET_BONUS: '보너스 번호를 입력해 주세요.\n',
  ERROR: {
    PAYMENT: '[ERROR] 구입금액이 1,000원 단위가 아닙니다.',
    DUPICATION: '[ERROR] 로또 번호는 중복되면 안됩니다.',
    NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
    BONUS: '[ERROR] 보너스 번호가 당첨 번호와 중복됩니다.',
    FORM: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  }
}

module.exports = MESSAGES;