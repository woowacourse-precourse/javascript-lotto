const INPUT = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  LOTTO_NUMBER: '당첨 번호를 입력해 주세요\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

const OUTPUT = {
  PURCHASE_COUNT: '개를 구매했습니다.',
  LOTTO_STATISTICS: '당첨 통계\n---',
};

const LOTTO = {
  FIFTH_PLACE: '3개 일치 (5,000원) - ',
  FOURTH_PLACE: '4개 일치 (50,000원) - ',
  THIRD_PLACE: '5개 일치 (1,500,000원) - ',
  SECOND_PLACE: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  FIRST_PLACE: '6개 일치 (2,000,000,000원) - ',

  COUNT: '개',
  RATE_RETURN: '총 수익률은 ',
  PREDICATIVE_PARTICLE: '입니다.',
}

const NUMBER = {
  LOTTO : 6,
}

const ERROR = {
  LOTTO_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_OVERLAP: '[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.',
  LOTTO_NUMBER: '[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.',
  LOTTO_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',

  BONUS_NUMBER: '[ERROR] 보너스 번호는 숫자로만 이루어져야 합니다.',
  BONUS_RANGE: '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  BONUS_OVERLAP: '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.',
}

module.exports = {
  INPUT,
  OUTPUT,
  LOTTO,
  NUMBER,
  ERROR,
};
  