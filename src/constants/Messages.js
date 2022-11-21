module.exports = Object.freeze({
  LOTTO_BUY_AT_LEAST_ONE: '최소 로또를 1개 이상 구매할 수 있는 금액을 입력해야 합니다.',
  LOTTO_BUY_NO_CHANGE: '로또를 구입한 후 남는 금액이 없어야 합니다.',
  LOTTO_VALIDATE_TYPE_MUST_NUMBER: '로또 번호는 Number 타입이어야 합니다.',
  LOTTO_VALIDATE_NUMBER_COUNT_MUST: '로또 번호는 {0}개여야 합니다.',
  LOTTO_VALIDATE_NUMBER_RANGE_MUST: '로또 번호는 {0}에서 {1} 사이여야 합니다.',
  LOTTO_VALIDATE_NO_DUPLICATE: '로또 번호는 모두 중복되어선 안됩니다.',

  REWARD_TITLE_NUMBER_MATCHES: '{0}개 일치',
  REWARD_TITLE_NUMBER_AND_BONUS_MATCHES: '{0}개 일치, 보너스 볼 일치',

  WINNING_LOTTO_VALIDATE_TYPE_MUST_NUMBER: '값은 반드시 Number 타입이어야 합니다.',
  WINNING_LOTTO_VALIDATE_NO_DUPLICATE: '로또의 번호와 보너스 번호가 중복됩니다.',

  PROMPT_READ_MUST_NUMBER: '숫자를 입력해야 합니다.',

  ROUTINE_BUY_PUT_MONEY: '구입금액을 입력해 주세요.',
  ROUTINE_BUY_SUCCESS: '{0}개를 구매했습니다.',

  ROUTINE_REWARD_PUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요. ',
  ROUTINE_REWARD_PUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요. ',

  ROUTINE_STATS_TITLE: '당첨 통계',
  ROUTINE_STATS_RATE_OF_RETURN: '총 수익률은 {0}%입니다.',

  /**
   * 주어진 메세지에서 {0}, {1} 부분을 args로 채워 반환한다.
   *
   * @param {string} message
   * @param  {...string} args
   * @returns {string}
   */
  format(message, ...args) {
    return args.reduce((formatted, arg, index) => formatted.replace(`{${index}}`, arg), message);
  },

  /**
   * 수익률을 지정된 포맷에 맞게 변환합니다.
   *
   * @param {number} rateOfReturn
   * @returns {string}
   */
  formatRateOfReturn(rateOfReturn) {
    const [integerPart, fractionPart] = rateOfReturn.toFixed(1).split('.');
    return `${Number(integerPart).toLocaleString('ko-KR')}.${fractionPart}`;
  },
});
