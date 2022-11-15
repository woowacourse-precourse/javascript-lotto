const Validation = require('../src/Validation');

describe("보너스 번호 테스트", () => {

  test('보너스 번호에 숫자 외의 값이 입력된 경우 예외가 발생한다.', () => {
    const validation = new Validation();
    const notOnlyNumber = () => validation.bonusValue([1, 2, 3, 4, 5, 6], '1r1');
    expect(notOnlyNumber).toThrow();
  });

  test('보너스 번호에 1보다 작은 수가 입력된 경우 예외가 발생한다.', () => {
    const validation = new Validation();
    const lessThanMin = () => validation.bonusValue([1, 2, 3, 4, 5, 6], '-1');
    expect(lessThanMin).toThrow();
  });

  test('보너스 번호에 45보다 큰 수가 입력된 경우 예외가 발생한다.', () => {
    const validation = new Validation();
    const overMax = () => validation.bonusValue([1, 2, 3, 4, 5, 6], '48');
    expect(overMax).toThrow();
  });

  test('보너스 번호에 당첨 번호와 중복되는 수가 입력된 경우 예외가 발생한다.', () => {
    const validation = new Validation();
    const duplicationWinningNumber = () => validation.bonusValue([1, 2, 3, 4, 5, 6], '1');
    expect(duplicationWinningNumber).toThrow();
  });
});