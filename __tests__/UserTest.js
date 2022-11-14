const MissionUtils = require("@woowacourse/mission-utils");
const User = require("../src/User");

describe("유저 클래스 테스트", () => {
  test("구입 문구 출력 테스트", () => {
    const message = "금액";
    const logSpy = jest.spyOn(MissionUtils.Console, "readLine");

    const user = new User();
    user.readAmount(message, (amount) => {});

    expect(logSpy).toHaveBeenCalledWith("금액", expect.anything());
  });
});
