const message = {
  INPUT_AMOUNT: '구입 금액을 입력해 주세요\n',
  INPUT_WINNING: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS: '\n보너스 번호를 입력해 주세요.\n',
  AMOUNT_ERROR: '[ERROR] 구입 금액은 1000의 단위 숫자여야 합니다.',
  RANGE_ERROR: '[Error] 로또 번호는 1~45 사이의 6자리 숫자입니다.',
  BONUS_RANGE_ERROR: '[Error] 보너스 번호는 1~45 사이의 숫자입니다.',
  BONUS_OVERLAP_ERROR: '[Error] 보너스 번호는 당첨번호와 일치할 수 없습니다.',
  LOTTO_COUNT_ERROR: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_OVERLAP_ERROR: '[ERROR] 로또 번호는 중복이 없어야 합니다.',
};

module.exports = message;
