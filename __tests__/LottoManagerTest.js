const LottoManager = require('../src/LottoManager');

describe('로또 매니저 클래스 테스트', () => {
  test('정답 번호 중 하나가 보너스 번호와 일치한다면 예외가 발생한다.', () => {
    expect(() => {
      const lottoManager = new LottoManager();
      lottoManager.setWinningNumbers([1, 2, 3, 4, 5, 6]);
      lottoManager.validateBonusNumber(6);
    }).toThrow('[ERROR]');
  });
});
