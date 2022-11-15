const Validation = require('../src/Validation');

describe('구입 금액 테스트', () => {
  test('구입 금액에 숫자가 아닌 문자가 입력된 경우 예외가 발생한다.', () => {
    const validation = new Validation();
    const numAndString = () => validation.purchaseValue('1김22나');
    expect(numAndString).toThrow();
  });

  test('구입 금액이 1000 단위로 입력되지 않은 경우 예외가 발생한다.', () => {
    const validation = new Validation();
    const incorrectUnit = () => validation.purchaseValue('1001');
    expect(incorrectUnit).toThrow();
  });
});