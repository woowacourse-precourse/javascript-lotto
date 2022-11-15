const MESSAGE = require('../src/MESSAGE');
const Lotto = require('../src/Lotto');
const UserLotto = require('../src/UsetLotto');

const testLotto = new UserLotto(MESSAGE.LOTTO_LENGTH);

describe.each([
  [[1, 2, 3, 4, 5, 6], '6', true],
  [[1, 2, 3, 4, 5, 6], '10', false],
  [[1, 3, 5, 6, 9, 11], '13', false],
])(
  '%s가 발행한 로또이고 %s가 보너스번호일 때 보너스 번호가 포함되어 있나요? : %d)',
  (first, second, expected) => {
    test('테스트', () => {
      expect(testLotto.compareBonusNumber(first, second)).toBe(expected);
    });
  }
);
