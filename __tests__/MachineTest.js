const Machine = require('../src/Machine');
const User = require('../src/User');
const Display = require('../src/Display');

describe('로또 머신 테스트', () => {
  test('로또 구매액 유효성 테스트', () => {
    expect(() => {
      new Machine(3001);
    }).toThrow(Display.error('UNACCEPTABLE_PAYMENT'));
  });
});
