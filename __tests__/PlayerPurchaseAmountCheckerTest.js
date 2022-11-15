const PlayerPurchaseAmountChecker = require('../src/services/PlayerPurchaseAmountChecker');

describe('PlayerPurchaseAmountChecker 클래스 테스트', () => {
  test('0 입력은 예외를 발생시킨다.', () => {
    expect(() => PlayerPurchaseAmountChecker.checkRowDataOfPurchaseAmount(0)).toThrow('[ERROR]');
  });

  test('1000 입력은 예외를 발생시킨다.', () => {
    expect(() => PlayerPurchaseAmountChecker.checkRowDataOfPurchaseAmount(1000)).toThrow('[ERROR]');
  });

  test('"notPlaceNumberInString" 입력은 예외를 발생시킨다.', () => {
    expect(() =>
      PlayerPurchaseAmountChecker.checkRowDataOfPurchaseAmount('notPlaceNumberInString')
    ).toThrow('[ERROR]');
  });

  test('0 입력은 예외를 발생시킨다.', () => {
    expect(() => PlayerPurchaseAmountChecker.checkPurchaseAmount(0)).toThrow('[ERROR]');
  });

  test('"number" 입력은 예외를 발생시킨다.', () => {
    expect(() => PlayerPurchaseAmountChecker.checkPurchaseAmount('number')).toThrow('[ERROR]');
  });

  test('10500 입력은 예외를 발생시킨다.', () => {
    expect(() => PlayerPurchaseAmountChecker.checkPurchaseAmount(10500)).toThrow('[ERROR]');
  });
});
