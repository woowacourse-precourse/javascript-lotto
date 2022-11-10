const LottoManager = require('../src/LottoManager');

describe('로또 관리자 클래스 테스트', () => {
  test('로또 구입 금액이 1,000으로 나누어 떨어지지 않으면 예외가 발생한다', () => {
    expect(() => {
      const lottoManager = new LottoManager();
      lottoManager.initLottos('1001');
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액에 숫자가 아닌 문자가 존재하면 예외가 발생한다.', () => {
    expect(() => {
      const lottoManager = new LottoManager();
      lottoManager.initLottos('1000j');
    }).toThrow('[ERROR]');
  });
});
