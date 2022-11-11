const ERROR = {
  MUST_BE_1000_UNIT: '[ERROR] 1,000원 단위의 금액만 입력 가능합니다.',
  MUST_INPUT_MORE_THAN_1000:
    '[ERROR] 1,000원 미만의 금액으로 로또를 구매할 수 없습니다.',
  MUST_BE_NUMBER: '[ERROR] 숫자만 입력해야 합니다.',
  MUST_HAVE_SIX_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
  MUST_INPUT_ONLY_NUMBER:
    '[ERROR] 문자, 특수기호를 제외한 1 ~ 45 사이의 숫자만 입력해야 합니다.',
  MUST_BE_WITHIN_RANGE: '[ERROR] 1 ~ 45 범위 이내의 숫자만 입력해야 합니다.',
  NOT_ALLOW_SAME_NUMBER: '[ERROR] 서로 다른 숫자만 입력해야 합니다.',
};

const NUMBER = {
  INPUT_UNITS: 1000,
  COUNT_OF_PICKING: 6,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
};

const MESSAGE = {
  INPUT_CASH: '구입금액을 입력해 주세요.\n',
  COUNT_OF_PURCHASED_LOTTOS: '개를 구매했습니다.',
  INPUT_LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

module.exports = { ERROR, NUMBER, MESSAGE };
