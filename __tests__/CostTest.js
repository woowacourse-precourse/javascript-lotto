const Cost = require('../src/Cost');
const { ERROR_MESSAGE } = require('../src/constant/constant');

describe('금액 클래스 테스트', () => {
  test('금액이 1000원으로 안 떨어지면 예외가 발생한다', () => {
    expect(() => {
      new Cost(100);
    }).toThrow(ERROR_MESSAGE.COST);
  });
});
