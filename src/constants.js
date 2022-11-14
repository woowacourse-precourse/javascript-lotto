const LOTTO = {
  TICKET_PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBER_COUNT: 6,
};

const CASHER = {
  ASK_MONEY: '구입금액을 입력해 주세요.',
  NOTICE_PURCHASE_QUANTITY: '개를 구매했습니다.',
};
const LOTTO_PICKER = {
  ASK_WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  ASK_BONUS_NUMBER: '보너스 볼을 입력해 주세요.\n',
  PICKER_ERROR: {
    WINNING_NUMBERS_LENGTH: '[ERROR] 당첨 번호는 6개여야 합니다.',
    WINNIG_NUMBERS_IS_NOT_NUMBER: '[ERROR] 당첨 번호는 숫자여야 합니다.',
    WINNING_NUMBERS_IS_NOT_IN_RANGE: '[ERROR] 당첨 번호는 1~45 사이의 숫자여야 합니다.',
    BONUS_NUMBER_IS_DUPLICATED: '[ERROR] 보너스 볼은 당첨 번호와 중복될 수 없습니다.',
    BONUS_NUMBER_IS_NOT_NUMBER: '[ERROR] 보너스 볼은 숫자여야 합니다.',
    BONUS_NUMBER_IS_NOT_IN_RANGE: '[ERROR] 보너스 볼은 1~45 사이의 숫자여야 합니다.',
  },
};

};

module.exports = { LOTTO, CASHER };
