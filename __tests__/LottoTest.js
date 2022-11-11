const Lotto = require('../src/Lotto');
const Vaildator = require('../src/Vaildator');

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
});

describe('Validator 클래스 테스트', () => {
  test('isRangeIn : 범위 내의 숫자인지 테스트한다.', () => {
    expect(Vaildator.isRangeIn(1, 45, 1)).toEqual(true);
    expect(Vaildator.isRangeIn(1, 45, 45)).toEqual(true);
    expect(Vaildator.isRangeIn(1, 45, 46)).toEqual(false);
    expect(Vaildator.isRangeIn(1, 45, 0)).toEqual(false);
  });
  test('isLottoLength: 로또 개수가 6개인지 테스트한다.', () => {
    expect(Vaildator.isLottoLength(5)).toEqual(false);
    expect(Vaildator.isLottoLength(6)).toEqual(true);
  });
});
