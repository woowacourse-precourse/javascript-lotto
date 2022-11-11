const LottoConfig = {
  PRICE: 1_000,

  MAX_NUMBER: 45,
  MIN_NUMBER: 1,
  NUMBERS: 6,

  PRIZE_1_CORRECT_COUNT: 6,
  PRIZE_2_3_CORRECT_COUNT: 5,
  PRIZE_4_CORRECT_COUNT: 4,
  PRIZE_5_CORRECT_COUNT: 3,

  PRIZE_1_MONEY: 2_000_000_000,
  PRIZE_2_MONEY: 30_000_000,
  PRIZE_3_MONEY: 1_500_000,
  PRIZE_4_MONEY: 50_000,
  PRIZE_5_MONEY: 5_000,
};

const AppConfig = {
  INPUT_SEPARATOR: ',',
  OUTPUT_SEPARATOR: ', ',
};

const Message = {
  ENTER_MONEY_MESSAGE: '구입금액을 입력해 주세요.\n',
  ENTER_WINNING_NUMBERS_MESSAGE: '당첨 번호를 입력해 주세요.\n',
  ENTER_BONUS_NUMBER_MESSAGE: '보너스 번호를 입력해 주세요.\n',

  ERROR_MONEY: '[ERROR] 구입금액이 1000의 배수가 아닙니다.',
  ERROR_LOTTO_RAANGE: `[ERROR] 로또 번호는 ${LottoConfig.MIN_NUMBER} 이상 ${LottoConfig.MAX_NUMBER} 이하의 자연수여야 합니다.`,
  ERROR_LOTTO_NUMBERS: `[ERROR] 로또 번호는 '${AppConfig.INPUT_SEPARATOR}'로 구분된 ${LottoConfig.NUMBERS}개의 숫자로 이루어져야 합니다.`,

  buy(count) {
    return `${count}개를 구매했습니다.`;
  },

  lottoNumber(lotto) {
    return `[${lotto.toString(AppConfig.OUTPUT_SEPARATOR)}]`;
  },

  statistics(prize1Count, prize2Count, prize3Count, prize4Count, prize5Count, rate) {
    const string = ['당첨 통계', '---'];
    string.push(`${LottoConfig.PRIZE_5_CORRECT_COUNT}개 일치 (${LottoConfig.PRIZE_5_MONEY.toLocaleString()}원) - ${prize5Count}개`);
    string.push(`${LottoConfig.PRIZE_4_CORRECT_COUNT}개 일치 (${LottoConfig.PRIZE_4_MONEY.toLocaleString()}원) - ${prize4Count}개`);
    string.push(`${LottoConfig.PRIZE_2_3_CORRECT_COUNT}개 일치 (${LottoConfig.PRIZE_3_MONEY.toLocaleString()}원) - ${prize3Count}개`);
    string.push(`${LottoConfig.PRIZE_2_3_CORRECT_COUNT}개 일치, 보너스 번호 일치 (${LottoConfig.PRIZE_2_MONEY.toLocaleString()}원) - ${prize2Count}개`);
    string.push(`${LottoConfig.PRIZE_1_CORRECT_COUNT}개 일치 (${LottoConfig.PRIZE_1_MONEY.toLocaleString()}원) - ${prize1Count}개`);
    string.push(`총 수익률은 ${rate.toFixed(1)}%입니다.`);
    return string.join('\n');
  },
};

module.exports = { LottoConfig, AppConfig, Message };
