const MESSAGE = require('../src/MESSAGE');
const Lotto = require('../src/Lotto');
const UserLotto = require('../src/UsetLotto');
const winWonCount = require('../src/UserWinNumCount');

const testLotto = new UserLotto(MESSAGE.LOTTO_LENGTH);

/*
number/count
*/

describe.each([
  [5, 2, '5개 일치 (1,500,000원) - 2개'],
  [5, 3, '5개 일치 (1,500,000원) - 3개'],
  [3, 4, '3개 일치 (5,000원) - 4개'],
])(
  '%d가 당첨번호와 일치한 번호의 개수이고 %d번 나올떄 때 문자열 출력이 올바른가요 )',
  (first, second, expected) => {
    test('테스트', () => {
      expect(winWonCount.winnumStr(first, second)).toBe(expected);
    });
  }
);
