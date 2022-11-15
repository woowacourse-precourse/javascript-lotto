const RANK_INDEX = {
  first: 0,
  second: 1,
  third: 2,
  fourth: 3,
  fifth: 4,
  lose: 5,
};

const RANK_REWARD = {
  first: 2000000000,
  second: 30000000,
  third: 15000000,
  fourth: 50000,
  fifth: 5000,
  lose: 0,
};

const RANK_PRINT = {
  first: '6개 일치 (2,000,000,000원) - ',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  third: '5개 일치 (1,500,000원) - ',
  fourth: '4개 일치 (50,000원) - ',
  fifth: '3개 일치 (5,000원) - ',
};

module.exports = {
  RANK_INDEX,
  RANK_REWARD,
  RANK_PRINT,
};
