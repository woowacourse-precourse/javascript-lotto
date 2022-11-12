const MESSAGE = {
  INPUT: {
    TOTAL_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
    WINNING_LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.',
    BONUS_LOTTO_NUMBER: '보너스 번호를 입력해 주세요.',
  },
  OUTPUT: {
    WINNING_HISTORY: '당첨 통계\n---\n',
    TOTAL_PURCHASE_AMOUNT: (amount) => `${amount}개를 구매했습니다.`,
    MATCH_3: (number) => `3개 일치 (5,000원) - ${number}개`,
    MATCH_4: (number) => `4개 일치 (50,000원) - ${number}개`,
    MATCH_5: (number) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
    MATCH_6: (number) => `6개 일치 (2,000,000,000원) - ${number}개`,
    RATE_OF_RETURN: (decimal) => `총 수익률은 ${decimal}%입니다.`,
  },
};
