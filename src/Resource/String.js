const INPUT = {
  GET_MONEY: '구입금액을 입력해 주세요.\n',
  GET_LOTTO: '당첨 번호를 입력해 주세요.\n',
};

const OUTPUT = {};

const ERROR = {
  MONEY_UNIT: '[Error] 돈의 단위는 1000원 입니다.',
  LOTTO_LENGTH: '[Error] 숫자가 6개 이어야 합니다.',
  LOTTO_RANGE: '[Error] 숫자의 범위는 1~45이어야 합니다.',
  LOTTO_OVERLAP: '[ERROR] 6개의 번호가 모두 겹치면 안된다.',
};

Object.freeze(INPUT);
Object.freeze(OUTPUT);
Object.freeze(ERROR);

module.exports = { INPUT, OUTPUT, ERROR };
