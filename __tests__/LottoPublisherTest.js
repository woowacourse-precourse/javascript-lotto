const LottoPublisher = require('../src/LottoPublisher');

describe('로또스토어 클래스 테스트', () => {
  const lottoPublisher = new LottoPublisher();
  test('당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,3,4,5,6,7');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,3,4,5,5');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 숫자가 아닌 값이 포함되면 예외가 발생한다', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,a,4,5,6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 정수가 아닌 유리수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,3,3.014,5,6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 음수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,3,-4,5,6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 46 이상의 수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,3,4,50,6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 1 미만의 수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,3,0,5,6');
    }).toThrow('[ERROR]');
  });
});
