const validate = require('../src/Utils/validate');

describe('validate 테스트', () => {
  test('문자 삽입에 대한 예외 처리', () => {
    expect(() => {
      validate.OnlyInputNum([1, 2, 3, 4, 'A', 5]);
    }).toThrow('[ERROR]');
  });

  test('Lotto 1000원단위 구매 예외처리', () => {
    expect(() => {
      validate.LottoPriceCheck(1001);
    }).toThrow('[ERROR]');
  });

  test('문자열 콤마 포함 예외 처리', () => {
    expect(() => {
      validate.LottoPriceCheck('123456');
    }).toThrow('[ERROR]');
  });

  test('길이 체크 예외 처리', () => {
    expect(() => {
      validate.Length('[1,2,3,4,5,6]', 7);
    }).toThrow('[ERROR]');
  });

  test('범위에 대한 예외 처리', () => {
    expect(() => {
      validate.Range(-1, 1, 45);
    }).toThrow('[ERROR]');
  });

  test('중복에 대한 예외 처리', () => {
    expect(() => {
      validate.Overlap([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또와 보너스 번호의 중복에 대한 예외 처리', () => {
    expect(() => {
      validate.DupNumber(6, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
