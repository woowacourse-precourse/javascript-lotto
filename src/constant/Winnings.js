const RANKING = [
  {
    LOCATE: '0',
    MATCH: 3,
    BONUS: false,
    JACKPOT: 5000,
    MESSAGE(MATCHNUMER) {
      return `3개 일치 (5,000원) - ${MATCHNUMER}개`;
    },
  },
  {
    LOCATE: '1',
    MATCH: 4,
    BONUS: false,
    JACKPOT: 50000,
    MESSAGE(MATCHNUMER) {
      return `4개 일치 (50,000원) - ${MATCHNUMER}개`;
    },
  },
  {
    LOCATE: '2',
    MATCH: 5,
    BONUS: false,
    JACKPOT: 1500000,
    MESSAGE(MATCHNUMER) {
      return `5개 일치 (1,500,000원) - ${MATCHNUMER}개`;
    },
  },
  {
    LOCATE: '3',
    MATCH: 5,
    BONUS: true,
    JACKPOT: 30000000,
    MESSAGE(MATCHNUMER) {
      return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${MATCHNUMER}개`;
    },
  },
  {
    LOCATE: '4',
    MATCH: 6,
    BONUS: false,
    JACKPOT: 2000000000,
    MESSAGE(MATCHNUMER) {
      return `6개 일치 (2,000,000,000원) - ${MATCHNUMER}개`;
    },
  },
];

const RANKING_MATCH_BONUS = 5;

module.exports = { RANKING, RANKING_MATCH_BONUS };
