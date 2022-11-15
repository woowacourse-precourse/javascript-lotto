const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

describe("로또 번호 일치 테스트", () => {
  afterAll(() => {
    MissionUtils.Console.close();
  });

  test("정상 출력1", () => {
    const winning = new Lotto([1, 2, 3, 4, 5, 6]);
    const user = new Lotto([3, 4, 5, 6, 7, 8]);
    user.setLottoResult(winning.getNumbers());
    expect(user.result.lotto).toBe(4);
  });

  test("겹치는게 하나도 없을 때", () => {
    const winning = new Lotto([1, 2, 3, 4, 5, 6]);
    const user = new Lotto([7,8,9,10,11,12]);
    user.setLottoResult(winning.getNumbers());
    expect(user.result.lotto).toBe(0);
  });

  test("string 잘 주어졌는지 확인", () => {
    const winning = new Lotto([1, 2, 3, 4, 5, 6]);
    const user = new Lotto([12,23,34,45,7,8]);
    user.setLottoResult(winning.getNumbers());
    expect(user.result.lotto).toBe(0);
  });

});
