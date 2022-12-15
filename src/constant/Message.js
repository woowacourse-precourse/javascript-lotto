const ASk_MESSAGE = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  LOTTO_NUMBER: '당첨 번호를 입력해 주세요.',
};

const PRINT_MESSAGE = {
  TOTAL_LOTTO_TICKETS(NUMBER) {
    return `${NUMBER}개를 구매했습니다.`;
  },
  LOTTO_TICKET(LOTTONUMBERLIST) {
    return `[${LOTTONUMBERLIST.join(', ')}]`;
  },
};

module.exports = { ASk_MESSAGE, PRINT_MESSAGE };
