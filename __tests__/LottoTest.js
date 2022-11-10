const { Lotto, LottoBuilder } = require('../src/Lotto');

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

  test('로또 번호가 1~45의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 99]);
    }).toThrow('[ERROR]');
  });
});

describe('로또 빌더 기능 테스트', () => {
  test('구매한 금액만큼의 로또 갯수', () => {
    const input = '8000';
    const lottoBuilder = new LottoBuilder();
    const result = lottoBuilder.countAmountLotto(input);
    expect(result).toBe(8);
  });
});
