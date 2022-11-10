module.exports = {
  REQUIRE: {
    purchaseAmount: '구입금액을 입력해 주세요.\n',
    winningNumber: '당첨번호를 입력해 주세요.\n',
    bonusNumber: '보너스 번호를 입력해 주세요.\n',
  },
  NOTICE: {
    amount: (amount) => `\n${amount}개를 구매했습니다.`,
    winningStats: '당첨 통계\n---',
    fifth: (count) => `3개 일치 (5,000원) - ${count}개`,
    fourth: (count) => `4개 일치 (50,000원) - ${count}개`,
    third: (count) => `5개 일치 (1,500,000원) - ${count}개`,
    second: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
    first: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
    earningsRate: (rate) => `총 수익률은 ${rate}%입니다.`,
  },
  ERROR: {
    number: '[ERROR] 구입금액은 숫자로 입력하여야 합니다.',
    minimum: '[ERROR] 구입금액은 최소 1,000원 이상이어야 합니다.',
    unit: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
    length: '[ERROR] 로또 번호는 6개여야 합니다.',
    range: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    repeat: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  },
  LOTTO_PRICE: 1000,
};
