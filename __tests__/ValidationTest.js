const Validation = require('../src/Validation');

describe('Validation 클래스 테스트', () => {
  test('구입 금액이 0원보다 작으면 예외가 발생', () => {
    expect(() => {
      Validation.checkInputPrice(-3000);
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 숫자가 아니면 예외가 발생', () => {
    expect(() => {
      Validation.checkInputPrice('1000q');
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 1000원 단위가 아니면 예외가 발생', () => {
    expect(() => {
      Validation.checkInputPrice(1500);
    }).toThrow('[ERROR]');
  });

  test('올바른 구입 금액 테스트 케이스', () => {
    expect(Validation.checkInputPrice(1000)).toBe(true);
  });

  test('당첨 번호가 6개가 아니면 예외가 발생(5개)', () => {
    expect(() => {
      Validation.checkInputHitLottoNumber('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 6개가 아니면 예외가 발생(7개)', () => {
    expect(() => {
      Validation.checkInputHitLottoNumber('1,2,3,4,5,6,7');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생.', () => {
    expect(() => {
      Validation.checkInputHitLottoNumber('1,2,3,4,5,5');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 1~45가 아닌 숫자가 있으면 예외가 발생', () => {
    expect(() => {
      Validation.checkInputHitLottoNumber('1,2,3,4,5,50');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 숫자가 아니면 예외가 발생', () => {
    expect(() => {
      Validation.checkInputHitLottoNumber('1,2,3,4,5,6q');
    }).toThrow('[ERROR]');
  });

  test('올바른 당첨 번호 입력 테스트 케이스', () => {
    expect(Validation.checkInputHitLottoNumber('1,2,3,4,5,6')).toBe(true);
  });
});
