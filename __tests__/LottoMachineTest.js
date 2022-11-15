const LottoMachine = require('../src/domain/LottoMachine');

describe('LottoMachine 클래스 테스트', () => {
  const lottoWinningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  let lottoMachine;
  beforeEach(() => {
    lottoMachine = new LottoMachine();
    lottoMachine.setLottoWinningNumbers(lottoWinningNumbers);
    lottoMachine.setBonusNumber(bonusNumber);
  });

  describe('setBonusNumber(bonusNumber)', () => {
    test('보너스 번호가 1~45 사이의 숫자가 아닌 경우 예외가 발생한다.', () => {
      expect(() => {
        lottoMachine.setBonusNumber(0);
      }).toThrow('[ERROR]');
    });

    test('보너스 번호가 당첨 번호에 존재하는 숫자인 경우 예외가 발생한다.', () => {
      lottoMachine.setLottoWinningNumbers([1, 2, 3, 4, 5, 6]);

      expect(() => {
        lottoMachine.setBonusNumber(1);
      }).toThrow('[ERROR]');
    });
  });
});
