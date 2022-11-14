const MissionUtils = require("@woowacourse/mission-utils");
const Store = require("../src/Store");

describe("Store 클래스 테스트", () => {
  const store = new Store();

  test("로또 발행", () => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockReturnValue([4, 5, 6, 1, 2, 3]);
    store.issue();
    expect(
      store.candidates.map((candidate) => candidate.numbers)
    ).toContainEqual([1, 2, 3, 4, 5, 6]);
  });

  test("1개의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      store.validatePrice("");
    }).toThrow("[ERROR] 숫자를 입력해 주세요.");
    expect(() => {
      store.validatePrice("1,2");
    }).toThrow("[ERROR] 숫자를 입력해 주세요.");
    expect(() => {
      store.validatePrice("%");
    }).toThrow("[ERROR] 숫자를 입력해 주세요.");
  });

  test("1000원 단위로 입력되지 않으면 예외가 발생한다.", () => {
    expect(() => {
      store.validatePrice(1500);
    }).toThrow("[ERROR] 1000원 단위로 입력해 주세요.");
    expect(() => {
      store.validatePrice(1);
    }).toThrow("[ERROR] 1000원 단위로 입력해 주세요.");
    expect(() => {
      store.validatePrice(1000.5);
    }).toThrow("[ERROR] 1000원 단위로 입력해 주세요.");
  });

  test("0 또는 음수가 입력되면 예외가 발생한다.", () => {
    expect(() => {
      store.validatePrice(-1000);
    }).toThrow("[ERROR] 양의 정수를 입력해 주세요.");
    expect(() => {
      store.validatePrice(0);
    }).toThrow("[ERROR] 양의 정수를 입력해 주세요.");
  });
});
