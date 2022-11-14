const { ERROR_MESSAGE } = require('../src/constants');
const Payment = require('../src/domain/Payment');

describe('Payment 테스트', () => {
  test('구매금액이 음수일때 ', () => {
    expect(() => {
      new Payment('-3000');
    }).toThrow(ERROR_MESSAGE.naturalNumber);
  });

  test('구매금액이 0일때', () => {
    expect(() => {
      new Payment('0');
    }).toThrow(ERROR_MESSAGE.naturalNumber);
  });

  test('구매금액에 문자가 포함되어 있을때', () => {
    expect(() => {
      new Payment('3O00');
    }).toThrow(ERROR_MESSAGE.unitOfThousand);
  });

  test('구매금액이 천원단위가 아닌 경우', () => {
    expect(() => {
      new Payment('3100');
    }).toThrow(ERROR_MESSAGE.unitOfThousand);
  });
});
