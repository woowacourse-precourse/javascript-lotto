const MATCH_MSG = [
  "당첨 통계\n---\n3개 일치 (5,000원) - ",
  "4개 일치 (50,000원) - ",
  "5개 일치 (1,500,000원) - ",
  "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  "6개 일치 (2,000,000,000원) - ",
];

const PAYOUT = [5000, 50000, 1500000, 30000000, 2000000000];

const MIN_MATCH = 3;
const MAX_MATCH = 7;

const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

module.exports = {
  MATCH_MSG,
  PAYOUT,
  MIN_MATCH,
  MAX_MATCH,
  MIN_NUMBER,
  MAX_NUMBER,
};
