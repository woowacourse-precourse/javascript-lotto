const MESSAGE = {
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_GOAL: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUSNUMBER: '보너스 번호를 입력해 주세요.\n',
};

const ERROR_MESSAGE = {
  NAN_ERROR: '[ERROR] 숫자를 입력하세요.',
  NOT_DISVISIBLE: '[ERROR] 1000원 단위로 입력하세요.',
  NOT_IN_RANGE: '[ERROR] 1~45 사이의 숫자를 입력하세요.',
  IS_WRONG_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
  NOT_UNIQUE_NUMBER: '[ERROR] 서로 다른 숫자를 입력하세요.',
  IS_ALREADY_WINNING_NUMBERS: '[ERROR] 당첨 번호에 보너스 번호가 이미 존재합니다.',
  IS_LESS_THEN_1000: '[ERROR] 최소 구입 금액은 1000원 입니다.',
};

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
};
