const MESSAGE = {
  ENTER_USER_MONEY: '구입금액을 입력해 주세요.\n',
  ENTER_USER_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  ENTER_USER_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const ERROR = {
  NOT_THOUSANDS: '[ERROR] 1000원 단위의 금액을 입력해주세요.',
  LESS_MONEY: '[ERROR] 1000원보다 큰 금액을 입력해주세요.',
  DUPLICATED_NUMBER: '[ERROR] 로또 번호 중 중복된 번호가 있습니다.',
  LESS_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
  SAME_NUMBER: '[ERROR] 로또 번호 중 동일한 번호가 있습니다.',
  SCOPE_OUT: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  TYPE: '[ERROR] 로또 번호는 숫자만 입력 가능합니다.',
};

module.exports = {
  MESSAGE,
  ERROR,
};
