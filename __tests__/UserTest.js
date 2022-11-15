const User = require('../src/User');

describe('유저 클래스 테스트', () => {
  test('✨ 사용자가 입력한 금액을 반환한다.', () => {
    const user = new User();
    user.setMoney(8000);
    expect(user.getMoney()).toBe(8000);
  });

  test('✨ 사용자가 구매한 로또 개수를 반환한다.', () => {
    const user = new User();
    user.setLottoQuantity(8);
    expect(user.getLottoQuantity()).toBe(8);
  });

  test('✨ 사용자가 구매한 로또 번호를 반환한다.', () => {
    const user = new User();
    user.setLottos([1, 2, 3, 4, 5, 6]);
    expect(user.getLottos()).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('✨ 사용자가 구매한 로또 번호와 당첨 번호가 3개 일치하면 three를 1증가시킨다.', () => {
    const user = new User();
    user.setCorrectLottoCount('three');
    const result = {
      three: 1,
      four: 0,
      five: 0,
      six: 0,
      bonus: 0,
    };
    expect(user.getCorrectLottoCount()).toStrictEqual(result);
  });
});
