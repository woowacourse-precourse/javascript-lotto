const MESSAGE = {
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_GOAL: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUSNUMBER: '보너스 번호를 입력해 주세요.\n',
};

const ERROR_MESSAGE = {
  NAN_ERROR: '[ERROR] 숫자를 입력하세요.',
  NOT_DISVISIBLE: '[ERROR] 1000으로 나누어 떨어지도록 입력하세요.',
  NOT_IN_RANGE: '[ERROR] 1~45 사이의 숫자를 입력하세요.',
  IS_WRONG_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
  NOT_UNIQUE_NUMBER: '[ERROR] 서로 다른 숫자를 입력하세요.',
  Is_Already_Winning_Numbers: '[ERROR] 당첨 번호에 보너스 번호가 이미 존재합니다.',
};

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
};
