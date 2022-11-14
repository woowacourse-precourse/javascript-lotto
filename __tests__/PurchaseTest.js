const Purchase = require('../src/Purchase');
const purchaseError = '../src/Constants/Messages';

describe('구매 클래스 테스트', () => {
  test('구매 값은 숫자만으로 이루어져 있어야 합니다.', () => {
    expect(() => {
      new Purchase('1234j');
    }).toThrow(purchaseError.NOT_NUMBER);
  });

  test('ERROR] 0보다 큰 수를 입력해 주세요.', () => {
    expect(() => {
      new Purchase('-3000');
    }).toThrow(purchaseError.MINUS);
  });

  test('구매 값은 1000원 단위입니다', () => {
    expect(() => {
      new Purchase('3800');
    }).toThrow(purchaseError.NOT_DIVIDED_BY_THOUSAND);
  });
});
