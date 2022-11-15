const { ERROR } = require('../src/Constants');

const WinningLotto = require('../src/WinningLotto');

describe('당첨 로또 클래스 테스트', () => {
  test('당첨 로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR.LESS_NUMBER);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('당첨 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR.DUPLICATED_NUMBER);
  });

  // 아래에 추가 테스트 작성 가능
  test('당첨 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR.DUPLICATED_NUMBER);
  });

  test('당첨 로또 번호 중 45보다 큰 숫자가 있는 경우 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([47, 1, 2, 3, 4, 5]);
    }).toThrow(ERROR.SCOPE_OUT);
  });

  test('당첨 로또 번호 중 1보다 작은 숫자가 있는 경우 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([-3, 1, 2, 3, 4, 5]);
    }).toThrow(ERROR.SCOPE_OUT);
  });

  test('당첨 로또의 보너스 번호가 당첨 로또 번호와 겹치는 경우 예외가 발생한다.', () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);

    expect(() => {
      winningLotto.isValidBonusNumber(1);
    }).toThrow(ERROR.SAME_NUMBER);
  });
});
