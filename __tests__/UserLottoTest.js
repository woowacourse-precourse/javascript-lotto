const UserLotto = require("../src/UserLotto");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValueOnce(numbers);
};

describe("유저로또 클래스 테스트", () => {
  test("로또 번호가 생성되는지 확인", () => {
    const numbers = [8, 21, 23, 41, 42, 43];
    mockRandoms(numbers);

    const output = new UserLotto().number;
    expect(output).toEqual(numbers);
  });
});
