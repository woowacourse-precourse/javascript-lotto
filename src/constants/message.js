const READ_MESSAGE = {
  pay: '구입금액을 입력해 주세요.\n',
  winNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
};

const RESULT_MESSAGE = {
  head: '\n당첨 통계\n---',
  rank: {
    1: '6개 일치 (2,000,000,000원)',
    2: '5개 일치, 보너스 볼 일치 (30,000,000원)',
    3: '5개 일치 (1,500,000원)',
    4: '4개 일치 (50,000원)',
    5: '3개 일치 (5,000원)',
  },
};

const ERROR_MESSAGE = {
  input: '[ERROR] 숫자와 쉼표만 입력 가능합니다.',
  number: '[ERROR] 숫자를 입력해야 합니다.',
  integer: '[ERROR] 정수를 입력해야 합니다.',
  lottoRange: '[ERROR] 로또 범위의 숫자를 입력해야 합니다.',
  lottoSize: '[ERROR] 로또 번호는 6개여야 합니다.',
  unique: '[ERROR] 로또 번호는 중복이 없어야 합니다.',
  payRange: '[ERROR] 로또 단가 이상 입력해야 합니다.',
  payDivide: '[ERROR] 로또 단가에 나누어 떨어져야 합니다.',
};

module.exports = {
  READ_MESSAGE,
  RESULT_MESSAGE,
  ERROR_MESSAGE,
};
