const MESSAGE = require('../src/MESSAGE');
const Lotto = require('../src/Lotto');
const UserLotto = require('../src/UsetLotto');

const testLotto = new UserLotto(MESSAGE.LOTTO_LENGTH);
const winlotto = new Lotto(MESSAGE.LOTTO_INIT_STR);

describe.each([
  [[1, 2, 3, 4, 5, 6], '1,2,3,4,5,6', 6],
  [[1, 2, 3, 4, 5, 6], '7,8,9,10,11,12', 0],
  [[1, 2, 3, 4, 5, 6], '1,2,3,7,8,9', 3],
])(
  '%s가 발행한 로또이고 %s가 당첨번호일 때 몇 개가 일치한가요? : %d)',
  (first, second, expected) => {
    test('테스트', () => {
      console.log(winlotto.WinLottoReplace(second));
      expect(
        testLotto.compareLotto(first, winlotto.WinLottoReplace(second))
      ).toBe(expected);
    });
  }
);
