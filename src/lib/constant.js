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

module.exports = { amountRegExp, AMOUNT_BY_RANK, SCORE_MSG_BY_RANK };
