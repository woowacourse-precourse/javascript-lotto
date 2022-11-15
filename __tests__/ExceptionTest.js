const Vaildator = require('../src/Vaildator');
const LottoShop = require('../src/LottoShop');

describe('예외 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      const vaildator = new Vaildator([1, 2, 3, 4, 5, 6, 7]);
      vaildator.lottoNumber();
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      const vaildator = new Vaildator([1, 2, 3, 4, 5, 5]);
      vaildator.lottoNumber();
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 숫자가 아니면 예외 발생.', () => {
    expect(() => {
      const vaildator = new Vaildator([1, 2, 3, 4, 5, NaN]);
      vaildator.lottoNumber();
    }).toThrow('[ERROR]');
  });

  test('로또 번호 범위 벗어나면 예외 발생.', () => {
    expect(() => {
      const vaildator = new Vaildator([0, 2, 3, 4, 5, 46]);
      vaildator.lottoNumber();
    }).toThrow('[ERROR]');
  });

  test('로또 구매 금액 1000원 미만일 때.', () => {
    expect(() => {
      const vaildator = new LottoShop(1232);
    }).toThrow('[ERROR]');
  });

  test('로또 구매 금액 1000으로 나눠 떨어지지 않을 때.', () => {
    expect(() => {
      const vaildator = new LottoShop(1232);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호 범위 벗어나면 예외 발생.', () => {
    expect(() => {
      const vaildator = new Vaildator(0);
      vaildator.bonusNumber([1, 2, 3, 4]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호와 로또 번호 중복시 예외 발생.', () => {
    expect(() => {
      const vaildator = new Vaildator(3);
      vaildator.bonusNumber([1, 2, 3, 4]);
    }).toThrow('[ERROR]');
  });
});
