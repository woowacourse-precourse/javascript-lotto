// matchLottoNumberWithWinningNumber.js 상수

const RANK = Object.freeze({
  first: 6,
  secondOrThird: 5,
  fourth: 4,
  fifth: 3,
});

// LottoNumberIssuedFromComputer.js 상수

const RESTRICTIONS = Object.freeze({
  lottoNumberStart_One: 1,
  lottoNumberEnd_FortyFive: 45,
  lottoNumberCount_Six: 6,
  thousand: 1000,
  noComma: 1,
});

// matchLottoNumberWithWinningNumber 상수

const PLUS_ONE = 1;

// calculateRateOfReturn.js 상수

const PERCENTAGE = 100;
const SECOND_DECIMAL = 1;
const MONEY = Object.freeze({
  first: 2_000_000_000,
  second: 30_000_000,
  third: 1_500_000,
  fourth: 50_000,
  fifth: 5_000,
});

// <----- UI 상수 ------->

// printLottoNumbers.js 상수

const WHILE_END = 0;

// LottoGame.js 상수

const INPUT_CONSOLE_MESSAGE = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요\n',
  winningNumber: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

// printLottoResult.js 상수

const RESULT_MESSAGE = Object.freeze({
  fifth: '3개 일치 (5,000원)',
  fourth: '4개 일치 (50,000원)',
  third: '5개 일치 (1,500,000원)',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  first: '6개 일치 (2,000,000,000원)',
});

const RESULT_START_MESSAGE = '\n당첨 통계\n---';

// Lotto.js 상수

const ERROR_MESSAGE = Object.freeze({
  hasString: '[ERROR] 숫자이외의 문자가 존재합니다.',
  notDivide: '[ERROR] 1000원으로 나누어 떨어지지 않습니다.',
  notCorrect: '[ERROR] 당첨번호가 올바르지 않습니다.',
  notComma: '[ERROR] 당첨번호 사이를 쉼표로 구분해주세요',
  notSix: '[ERROR] 당첨번호가 6개가 아닙니다.',
  outOfRange: '[ERROR] 당첨번호중 1~45범위를 벗어나는 숫자가 존재합니다.',
  hasDuplication: '[ERROR] 중복되는 숫자가 존재합니다.',
  hasDuplicationWithWinning: '[ERROR] 당첨번호와 중복되는 숫자가 존재합니다.',
});

module.exports = {
  ERROR_MESSAGE,
  INPUT_CONSOLE_MESSAGE,
  RESULT_START_MESSAGE,
  MONEY,
  RANK,
  RESTRICTIONS,
  RESULT_MESSAGE,
  PLUS_ONE,
  PERCENTAGE,
  SECOND_DECIMAL,
  WHILE_END,
};
