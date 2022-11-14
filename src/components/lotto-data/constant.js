const MONEY = {
  first: 2_000_000_000,
  second: 30_000_000,
  third: 1_500_000,
  fourth: 50_000,
  fifth: 5_000,
};

const RANK = {
  first: 6,
  secondOrThird: 5,
  fourth: 4,
  fifth: 3,
};

const RESTRICTIONS = {
  lottoNumberStart_One: 1,
  lottoNumberEnd_FortyFive: 45,
  lottoNumberCount_Six: 6,
  thousand: 1000,
  noComma: 1,
};

const RESULT_COMMENT = {
  fifth: '3개 일치 (5,000원)',
  fourth: '4개 일치 (50,000원)',
  third: '5개 일치 (1,500,000원)',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  first: '6개 일치 (2,000,000,000원)',
};

module.exports = { MONEY, RANK, RESTRICTIONS, RESULT_COMMENT };
