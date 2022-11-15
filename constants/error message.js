const BASIC_NUMBER = require('./basic number');
const LOTTO_NUMBER = require('./lotto number');
const { MATCH } = require('./winning number');

const ERROR_MESSAGE = Object.freeze({
  OUT_OF_RANGE: `[ERROR] 로또 번호는 ${LOTTO_NUMBER.MIN}부터 ${LOTTO_NUMBER.MAX} 사이의 숫자여야 합니다.`,
  DUP_ERROR: '[ERROR] 중복 없는 숫자만 입력해야 합니다.',
  LENGTH_ERROR: `[ERROR] ${MATCH.SIX}개 숫자를 입력해야 합니다`,
  TYPE_ERROR: '[ERROR] 숫자만 입력해야 합니다.',
  UNIT_ERROR: `[ERROR] ${BASIC_NUMBER.THOUSAND}원 단위로 입력해야 합니다.`,
  BONUS_DUP_ERROR: '[ERROR] 당첨 번호와 중복되지 않은 번호를 입력해야 합니다.',
});

module.exports = ERROR_MESSAGE;
