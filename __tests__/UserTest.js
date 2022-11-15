const User = require('../src/User');

describe('User 클래스 테스트', () => {
  test('로또 순위를 계산하는 기능:', () => {
    const user = new User();
    expect(user.dicideRank(6, false)).toEqual(1);
    expect(user.dicideRank(5, true)).toEqual(2);
    expect(user.dicideRank(5, false)).toEqual(3);
    expect(user.dicideRank(4, false)).toEqual(4);
    expect(user.dicideRank(3, false)).toEqual(5);
    expect(user.dicideRank(2, false)).toEqual(0);
  });
});
