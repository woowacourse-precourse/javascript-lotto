/* eslint-disable no-new */
/* eslint-disable max-lines-per-function */
const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호 형변환 테스트', () => {
    const input = '1,2,3,4,5,6';
    const expectedResult = [1, 2, 3, 4, 5, 6];

    expect(Lotto.changeWinningNumbersType(input)).toEqual(expectedResult);
  });
});
