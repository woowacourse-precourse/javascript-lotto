const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
const Lotto = require('./Lotto');

describe('Lotto 클래스 테스트', () => {
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

  test('로또 번호와 당첨 번호, 보너스 번호를 비교 후 결과를 반환한다.', () => {
    const lottoNumbers = [1, 3, 5, 14, 22, 45];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;
    const lottoResult = new Lotto(lottoNumbers).compareTo(winningNumbers, BONUS_NUMBER);
    const lottoNumberCount = new LottoNumberCount(3);

    expect(lottoResult.isWinning(lottoNumberCount)).toBe(true);
  });
});
