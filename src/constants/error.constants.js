const USER_ERROR = Object.freeze({
  NOT_INTEGER: '[ERROR] 정수인 금액만 입력 가능합니다.',
  NOT_POSITIVE: '[ERROR] 양의 정수인 금액만 입력 가능합니다.',
  NOT_DIVISIBLE: '[ERROR] 1,000원 단위로 나누어질 수 있는 금액만 입력 가능합니다.',
  OVER_RANGE: '[ERROR] 구매 가능한 금액을 초과했습니다.',
});

const LOTTO_ERROR = Object.freeze({
  NOT_INTEGER: '[ERROR] 로또 번호는 정수만 입력 가능합니다.',
  OUT_OF_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 정수만 입력 가능합니다.',
  OUT_LENGTH: '[ERROR] 로또 번호는 6개까지만 입력 가능합니다.',
  OVERLAP_EXIST: '[ERROR] 로또 번호는 중복될 수 없습니다.',
});

const BONUS_ERROR = Object.freeze({
  NOT_INTEGER: '[ERROR] 보너스 번호는 정수만 입력 가능합니다.',
  OUT_OF_RANGE: '[ERROR] 보너스 번호는 1부터 45 사이의 정수만 입력 가능합니다.',
  OVERLAP_EXIST: '[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.',
});

// TODO: module exports를 {}로 묶었으면 require 할 때에도 {}?
module.exports = {
  USER_ERROR,
  LOTTO_ERROR,
  BONUS_ERROR,
};
