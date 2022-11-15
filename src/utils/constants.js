const { sortAscendingNumbers, addMoneyComma } = require("./utils");

const LOTTO = {
  PURCHASE_UNIT: 1000,
  NUMBER_RANGE: {
    START: 1,
    END: 45,
    COUNT: 6,
  },
};

const ENTER_MESSAGE = {
  PURCHASE_AMOUT: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

const PRINT_MESSAGE = {
  PURCHASE_COUNT: (purchaseCount) => `${purchaseCount}개를 구매했습니다.`,
  LOTTO_NUMBERS: (lottoNumbers) =>
    `[${sortAscendingNumbers(lottoNumbers).join(", ")}]`,
  PROFIT_RATE: (profitRate) =>
    `총 수익률은 ${addMoneyComma(profitRate)}%입니다.`,
  ERROR: (content) => `[ERROR] ${content}`,
  WINNING_HISTORY: ({
    isBonusNumberMatch,
    winningNumberMatch,
    prizeMoney,
    count,
  }) =>
    isBonusNumberMatch
      ? `${winningNumberMatch}개 일치, 보너스 볼 일치 (${addMoneyComma(
          prizeMoney
        )}원) - ${count}개`
      : `${winningNumberMatch}개 일치 (${addMoneyComma(
          prizeMoney
        )}원) - ${count}개`,
};

const winningRanking = [
  {
    winningNumberMatch: 3,
    prizeMoney: 5000,
    isBonusNumberMatch: false,
    count: 0,
  },
  {
    winningNumberMatch: 4,
    prizeMoney: 50000,
    isBonusNumberMatch: false,
    count: 0,
  },
  {
    winningNumberMatch: 5,
    prizeMoney: 1500000,
    isBonusNumberMatch: false,
    count: 0,
  },
  {
    winningNumberMatch: 5,
    prizeMoney: 30000000,
    isBonusNumberMatch: true,
    count: 0,
  },
  {
    winningNumberMatch: 6,
    prizeMoney: 2000000000,
    isBonusNumberMatch: false,
    count: 0,
  },
];

module.exports = { winningRanking, ENTER_MESSAGE, PRINT_MESSAGE, LOTTO };
