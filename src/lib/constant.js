const amountRegExp = /^[1-9][0-9]*[0]{3}$/;

const AMOUNT_BY_RANK = {
  1: '2,000,000,000',
  2: '30,000,000',
  3: '1,500,000',
  4: '50,000',
  5: '5,000',
};

const SCORE_MSG_BY_RANK = {
  1: '6개 일치',
  2: '5개 일치, 보너스 볼 일치',
  3: '5개 일치',
  4: '4개 일치',
  5: '3개 일치',
};

const CONSOLE_MSG = {
  enterPerchaseAmount: '구입금액을 입력해 주세요.\n',
  enterLottoNumbers: '\n당첨 번호를 입력해 주세요.\n',
  enterBonusNumber: '\n보너스 번호를 입력해주세요.\n',
  winStatistics: '당첨 통계\n---\n',
  confirmNumbers: (numberOfLottos) => `\n${numberOfLottos}개를 구매했습니다.`,
  confirmRate: (rateOfProfit) => `총 수익률은 ${rateOfProfit}입니다.`,
  winMessage: (scoreMsg, amountMsg, cnt) => `${scoreMsg} (${amountMsg}원) - ${cnt}개`,
  rateOfProfit: (quotient, remainder) => `${quotient}.${remainder}%`,
};

const ERROR_MSG = {
  invalidUnitOf1000: '[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.',
  invalidLottos: '[ERROR] 로또 번호는 유효한 6개여야 합니다.',
  duplicatedLottosAndBonus: '[ERROR] 로또 번호와 보너스 번호는 중복되지 않아야 합니다.',
};

module.exports = { amountRegExp, AMOUNT_BY_RANK, SCORE_MSG_BY_RANK, CONSOLE_MSG, ERROR_MSG };
