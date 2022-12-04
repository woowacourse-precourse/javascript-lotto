const Draw = require('../src/Draw');

describe('Draw 클래스 테스트', () => {
  test('당첨 번호 형변환 테스트', () => {
    const input = '1,2,3,4,5,6';
    const expectedResult = [1, 2, 3, 4, 5, 6];

    expect(Draw.changeWinningNumbersType(input)).toEqual(expectedResult);
  });
});
