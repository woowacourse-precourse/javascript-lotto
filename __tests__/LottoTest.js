const Lotto = require('../src/components/Lotto');
const { ERROR } = require('../src/data/constants');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능

  test('로또 번호에 1~45의 범위를 지키지 않은 수가 있다면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 0, 46]);
    }).toThrow(ERROR.LOTTO_RANGE);
  });

  test('로또 번호 반환', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getLottoNum()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('로또 맞춰보기', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.checkWinning([1, 2, 3, 4, 5, 6], 7)).toEqual(6);
  });

  test('로또 맞춰보기(보너스)', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.checkWinning([1, 2, 3, 4, 5, 23], 6)).toEqual('bonus');
  });
});
