const User = require('../src/User');
const { ERR_MSG } = require('../src/constants');

describe('셀프 유저 테스트', () => {
  test('로또 구입 금액 예외 테스트', () => {
    const purchaseAmout = [
      '100j',
      'k102',
      '00010',
      '1ak9',
      '999',
      '12300',
      '1234',
      '',
      '000',
      'test',
      '1000.0'
    ];

    purchaseAmout.forEach(amount => {
      expect(() => {
        const user = new User(amount);
      }).toThrow(ERR_MSG.invalidPurchaseMoney);
    });
  });
});
