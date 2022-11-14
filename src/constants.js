const INPUT_MESSAGE = Object.freeze({
  paymentAmount: '구입금액을 입력해 주세요.\n',
  winnerNumber: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  amountLotto: (lottoTickets) => `\n${lottoTickets}개를 구매했습니다.`,
  profitRate: (lottoProfitRate) => `총 수익률은 ${lottoProfitRate}%입니다.`,
  firstPrize: (lottoResult) => `6개 일치 (2,000,000,000원) - ${lottoResult}개`,
  secondPrize: (lottoResult) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult}개`,
  thirdPrize: (lottoResult) => `5개 일치 (1,500,000원) - ${lottoResult}개`,
  fourthPrize: (lottoResult) => `4개 일치 (50,000원) - ${lottoResult}개`,
  fifthPrize: (lottoResult) => `3개 일치 (5,000원) - ${lottoResult}개`,
  lottoResultAlarm: '\n당첨 통계\n---',
});

const LOTTO_RANGE = Object.freeze({
  minimunNumberRange: 1,
  maximunNumberRange: 45,
  lottoCount: 6,
  pricePerLotto: 1000,
});

const PRIZE_MONEY_CURRENCY = Object.freeze({
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  foutrh: 50000,
  fifth: 5000,
});

const ERROR_MESSAGE = Object.freeze({
  unitOfThousand: '[ERROR] 구입 금액은 1000원 단위의 숫자만 입력해주세요.',
  naturalNumber: '[ERROR] 구입 금액은 1000원 이상의 금액을 입력해주세요',
  lottoRange: '[ERROR] 1에서 45까지의 번호를 입력해주세요',
  lottoCountOnlySix: '[ERROR] 로또 번호는 6개여야 합니다.',
  numberWithoutDuplicate: '[ERROR] 중복없이 숫자를 입력해주세요.',
  winnerNumberRange: '[ERROR] 쉼표(,)를 기준으로 1부터 45까지의 숫자만 입력 해주세요',
  winnerNumberCountOnlySix: '[ERROR] 쉼표(,)를 기준으로 6자리를 입력해주세요',
});
module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  LOTTO_RANGE,
  PRIZE_MONEY_CURRENCY,
  ERROR_MESSAGE,
};
