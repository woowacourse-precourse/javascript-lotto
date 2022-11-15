const INPUT = {
  GET_MONEY: '구입금액을 입력해 주세요.\n',
  GET_LOTTO: '당첨 번호를 입력해 주세요.\n',
  GET_LOTTO_ADDITINAL: '보너스 번호를 입력해 주세요.\n',
};

const OUTPUT = {};

const ERROR = {
  MONEY_UNIT: `[ERROR] 돈의 단위는 1000원 입니다.`,
  LOTTO_LENGTH: `[ERROR] 숫자가 6개 이어야 합니다.`,
  LOTTO_RANGE: `[ERROR] 숫자의 범위는 1~45이어야 합니다.`,
  LOTTO_OVERLAP: `[ERROR] 6개의 번호가 모두 겹치면 안됩니다.`,
  OVER_ADDITINAL_NUMBER: `[ERROR] 보너스 번호가 1개의 숫자이어야 합니다.`,
  CONFLICT_ADDITIONIONL_NUMBER: `[ERROR] 보너스 번호는 6개의 번호와 겹치면 안됩니다.`,
};

const LOTTO_STRING = {
  FIRST_PLACE: '6개 일치',
  SECOND_PLACE: '5개 일치, 보너스 볼 일치',
  THIRD_PLACE: '5개 일치',
  FOURTH_PLACE: '4개 일치',
  FIFTH_PLACE: '3개 일치',
};

Object.freeze(INPUT);
Object.freeze(OUTPUT);
Object.freeze(ERROR);
Object.freeze(LOTTO_STRING);

module.exports = { INPUT, OUTPUT, ERROR, LOTTO_STRING };
