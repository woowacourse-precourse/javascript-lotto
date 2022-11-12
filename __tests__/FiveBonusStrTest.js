const MESSAGE = require('../src/MESSAGE');
const fivebonustest = require('../src/UserWinNumCount');

test('If Bonus String is Valid', () => {
  let value = fivebonustest(MESSAGE.FiveBonus, 2);
  expect(value.toLocaleString()).toBe('5개 일치, 보너스 볼 일치30000000원2');

  value = fivebonustest(MESSAGE.FiveBonus, 4);
  expect(value.toLocaleString()).toBe('5개 일치, 보너스 볼 일치30000000원4');
});
