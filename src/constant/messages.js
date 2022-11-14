const ACTION_MESSAGES = {
  purchase: '개를 구매했습니다.',
  result: '\n당첨 통계\n---',
};

const INPUT_MESSAGES = {
  money: '구입 금액을 입력해주세요.\n',
  winnerNumber: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
};

const ERROR_MESSAGES = {
  length: '[ERROR] 로또 번호는 6개여야 합니다\n',
  type: '[ERROR] 입력 금액은 숫자여야 합니다',
  divisionByThousand: '[ERROR] 금액은 1,000원 단위여야 합니다',
  overlap: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.\n',
};

const PRIZE_MESSAGES = {
  three: '(5,000원)',
  four: '(50,000원)',
  five: '(1,500,000원)',
  bonus: '(30,000,000원)',
  six: '(2,000,000,000원)',
};

const MATCHING_MESSAGES = {
  three: '3개 일치',
  four: '4개 일치',
  five: '5개 일치',
  bonus: '5개 일치, 보너스 볼 일치',
  six: '6개 일치',
};

module.exports = {
  ACTION_MESSAGES,
  INPUT_MESSAGES,
  ERROR_MESSAGES,
  PRIZE_MESSAGES,
  MATCHING_MESSAGES,
};
