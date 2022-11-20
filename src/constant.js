module.exports = {
  LOTTO: {
    price: 1000,
    rangeStart: 1,
    rangeEnd: 45,
    count: 6,
  },
  REGEXP: {
    number: /^\d+$/,
    winningNumbers: /^(\d{1,2},){5}\d{1,2}$/,
    bonusNumber: /^\d{1,2}$/,
  },
  PRIZE_MONEY: {
    fifth: 5000,
    fourth: 50000,
    third: 1500000,
    second: 30000000,
    first: 2000000000,
  },
  REQUIRE: {
    purchaseAmount: '구입 금액을 입력해 주세요.\n',
    winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
    bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  },
  NOTICE: {
    amount: (amount) => `\n${amount}개를 구매했습니다.`,
    winningStatus: '\n당첨 통계\n---',
    fifth: (count) => `3개 일치 (5,000원) - ${count}개`,
    fourth: (count) => `4개 일치 (50,000원) - ${count}개`,
    third: (count) => `5개 일치 (1,500,000원) - ${count}개`,
    second: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
    first: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
    earningsRate: (rate) => `총 수익률은 ${rate}%입니다.`,
  },
  ERROR: {
    purchaseAmount:
      '[ERROR] 구입 금액은 최소 1,000원 이상이며 1,000 단위의 숫자이어야 합니다.\n예) 3000',
    lottoNumber:
      '[ERROR] 로또 번호는 1부터 45 사이의 숫자 중 중복되지 않는 숫자 6개여야 합니다.\n예) 1,2,3,4,5,6',
    winningNumbers:
      '[ERROR] 당첨 번호는 1부터 45 사이의 숫자 중 중복되지 않는 숫자 6개이며 쉼표로 구분되어야 합니다.\n예) 1,2,3,4,5,6',
    bonusNumber:
      '[ERROR] 보너스 번호는 1부터 45 사이의 숫자 중 당첨 번호와 중복되지 않는 숫자여야 합니다.',
  },
};
