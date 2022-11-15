const Lotto = require('../src/Lotto');
const Display = require('../src/Display');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(Display.error('OUT_OF_VOLUME'));
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(Display.error('DUPLICATED'));
  });

  test('로또 번호의 범위가 1~45가 아닐 경우 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 56]);
    }).toThrow(Display.error('OUT_OF_RANGE'));
  });
});
