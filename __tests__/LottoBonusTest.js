const LottoBonus = require('../src/LottoBonus');

describe('LottoBonus 클래스 테스트', () => {
  test('보너스 번호가 1~45범위의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new LottoBonus(0, []);
    }).toThrow('[ERROR]');
    expect(() => {
      new LottoBonus(46, []);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 겹치는 숫자이면 예외가 발생한다.', () => {
    expect(() => {
      new LottoBonus(12, [1, 2, 3, 4, 5, 12]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호를 가지고 오는 getNumber 매서드가 정상 동작한다.', () => {
    // 준비(arrange)
    const lottoBonus = new LottoBonus(12, [1, 2, 3, 4, 5, 6]);

    // 실행(act)
    const result = lottoBonus.getNumber();

    // 검증(assert)
    expect(result).toEqual(12);
  });
});
