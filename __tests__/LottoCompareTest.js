const MESSAGE = require('../src/MESSAGE');
const Lotto = require('../src/Lotto');
const UserLotto = require('../src/UsetLotto');

const testlotto = new Lotto('123456');
const userlotto = new UserLotto(1);
/*
내로또, 당첨
*/

const testlottoarr = testlotto.pubishLotto(6);
const winlottonumber = '123456';
describe.each([
  [testlottoarr[0], winlottonumber],
  [testlottoarr[1], winlottonumber],
  [testlottoarr[2], winlottonumber],
  [testlottoarr[3], winlottonumber],
  [testlottoarr[4], winlottonumber],
  [testlottoarr[5], winlottonumber],
])(
  '%s가 내가 산 번호일 떄 %s가 당첨번호라면 최대 당첨번호가 6아래인가요 ?)',
  (result, expected) => {
    test('테스트', () => {
      expect(userlotto.compareLotto(result, expected)).toBeLessThanOrEqual(6);
    });
  }
);
