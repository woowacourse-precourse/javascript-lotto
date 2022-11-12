const LottoGenerator = require('../src/LottoGenerator');

describe('LottoGenerator 클래스 테스트', () => {
  const lottoGenerator = new LottoGenerator();

  test('1000원으로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
    expect(() => {
      lottoGenerator.generate(8800);
    }).toThrow('[ERROR]');
    expect(() => {
      lottoGenerator.generate(800);
    }).toThrow('[ERROR]');
  });

  test('음수 또는 0인 경우 예외가 발생한다.', () => {
    expect(() => {
      lottoGenerator.generate(-1000);
    }).toThrow('[ERROR]');
    expect(() => {
      lottoGenerator.generate(0);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      lottoGenerator.generate(NaN);
    }).toThrow('[ERROR]');
  });

  test('아무 값도 입력하지 않은 경우 예외가 발생한다.', () => {
    expect(() => {
      lottoGenerator.generate('');
    }).toThrow('[ERROR]');
  });

  test('구입 금액에 해당하는 만큼의 로또가 발행되었다.', () => {
    lottoGenerator.generate(8000);
    expect(lottoGenerator.getGeneratedLotto()).toHaveLength(8);
  });
});
