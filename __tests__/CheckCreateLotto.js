const MESSAGE = require('../src/MESSAGE');
const Lotto = require('../src/Lotto');

const testlotto = new Lotto('123456');
test('랜덤 로또 발행 테스트', () => {
  const newlotto = testlotto.pubishLotto(1);
  const newlottolist = newlotto[0];
  expect(testlotto.validate(newlottolist)).toBe(true);
  expect(testlotto.validate_indepence(newlottolist)).toBe(true);
});
