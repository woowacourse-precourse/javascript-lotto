const RankingCalculate = require('../src/lotto-make-and-calculate/RankingCalculate');

describe('점수 계산 테스트', () => {
  test('정답과 일치하는 문자의 개수 계산 (countMatchLength() 검사)', () => {
    const answer = [1,2,3,4,5,6];
    const check = [
      [[1,2,3,10,11,12], 3],
      [[1,2,3,4,10,11], 4],
      [[1,2,3,4,5,10], 5],
      [[1,2,3,4,5,6], 6]
    ];
    for (let i = 0; i < 4; i++) {
      expect(check[i][0].filter(eachNumber => answer.includes(eachNumber)).length).toBe(check[i][1]);
    };
  });

  test('(5개 & 보너스)를 맞춘 경우에는 보너스가 있는 점수만 증가시킨다.', () => {
    const rankingCalculate = new RankingCalculate([[1,2,3,4,5,10]], [1,2,3,4,5,6], 10);
    expect(rankingCalculate.rankCalculateStart()).toEqual([ 0, 0, 0, 1, 0 ]);
  });

  test('5개는 맞고 보너스는 틀린 경우, 5개 맞춘 점수만 증가시킨다.', () => {
    const rankingCalculate = new RankingCalculate([[1,2,3,4,5,10]], [1,2,3,4,5,6], 7);
    expect(rankingCalculate.rankCalculateStart()).toEqual([ 0, 0, 1, 0, 0 ]);
  });

  test('2개 이하만 정답일 경우 모두 0이다.', () => {
    const rankingCalculate = new RankingCalculate([[1,2,3,4,5,6]], [1,2,7,8,9,10], 3);
    expect(rankingCalculate.rankCalculateStart()).toEqual([ 0, 0, 0, 0, 0 ]);
  });

  test('3개만 맞을 경우', () => {
    const rankingCalculate = new RankingCalculate([[1,2,3,4,5,6]], [1,2,3,8,9,10], 11);
    expect(rankingCalculate.rankCalculateStart()).toEqual([ 1, 0, 0, 0, 0 ]);
  });

  test('4개만 맞을 경우', () => {
    const rankingCalculate = new RankingCalculate([[1,2,3,4,5,6]], [1,2,3,4,9,10], 11);
    expect(rankingCalculate.rankCalculateStart()).toEqual([ 0, 1, 0, 0, 0 ]);
  });

  test('6개 모두 맞을 경우', () => {
    const rankingCalculate = new RankingCalculate([[1,2,3,4,5,6]], [1,2,3,4,5,6], 13);
    expect(rankingCalculate.rankCalculateStart()).toEqual([ 0, 0, 0, 0, 1 ]);
  });
});
