const PriceValidation = require('../src/Validation/PriceValidation');

describe('로또 금액 입력값 유효성 검사 테스트 ', () => {
  test('아무것도 입력하지 않으면 예외가 발생한다. (1)', () => {
    expect(() => {
      const priceValidation = new PriceValidation('');
      priceValidation.validate();
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });
  test('아무것도 입력하지 않으면 예외가 발생한다. (2)', () => {
    expect(() => {
      const priceValidation = new PriceValidation(null);
      priceValidation.validate();
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });
  test('아무것도 입력하지 않으면 예외가 발생한다. (3)', () => {
    expect(() => {
      const priceValidation = new PriceValidation(undefined);
      priceValidation.validate();
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });

  test('숫자 외의 문자를 입력하면 예외가 발생한다. (1)', () => {
    expect(() => {
      const priceValidation = new PriceValidation('3000원');
      priceValidation.validate();
    }).toThrow('[ERROR] 숫자를 입력해주세요.');
  });

  test('숫자 외의 문자를 입력하면 예외가 발생한다. (2)', () => {
    expect(() => {
      const priceValidation = new PriceValidation('3,000');
      priceValidation.validate();
    }).toThrow('[ERROR] 숫자를 입력해주세요.');
  });

  test('1000원 단위가 아니라면 예외가 발생한다. (1)', () => {
    expect(() => {
      const priceValidation = new PriceValidation('3500');
      priceValidation.validate();
    }).toThrow('[ERROR] 1000원 단위로 입력해주세요.');
  });

  test('1000원 단위가 아니라면 예외가 발생한다. (2)', () => {
    expect(() => {
      const priceValidation = new PriceValidation('9999');
      priceValidation.validate();
    }).toThrow('[ERROR] 1000원 단위로 입력해주세요.');
  });

  test('1000원 단위가 아니라면 예외가 발생한다. (3)', () => {
    expect(() => {
      const priceValidation = new PriceValidation('100');
      priceValidation.validate();
    }).toThrow('[ERROR] 1000원 단위로 입력해주세요.');
  });
});
