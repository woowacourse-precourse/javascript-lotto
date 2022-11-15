const { splitComma } = require('../src/libs/Utils');

describe('쉼표(,) 기준으로 번호를 구분하는 함수 테스트 ', () => {
  test('기능 테스트', () => {
    expect(splitComma('1,2,3,4,5,6')).toEqual(['1', '2', '3', '4', '5', '6']);
    expect(splitComma('1 , 2, 3, 4, 5, 6')).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ]);
  });
});
