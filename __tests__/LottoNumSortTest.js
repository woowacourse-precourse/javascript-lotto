const Lotto = require("../src/Lotto");

describe("로또 번호 오름차순 정렬 테스트", () => {
  test("오름차순 입력", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("오름차순 정렬1", () => {
    const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("오름차순 정렬2", () => {
    const lotto = new Lotto([1, 11, 26, 3, 44, 8]);
    expect(lotto.getNumbers()).toEqual([1, 3, 8, 11, 26, 44]);
  });

});
