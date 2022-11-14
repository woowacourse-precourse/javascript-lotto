const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const app = new App();

describe("앱 클래스 테스트 (makeUserTicket)", () => {
  test("금액을 입력 받으면 티켓 수를 출력", () => {
    expect(app.makeUserTicket(4000)).toBe(4);
  });

  test("입력 받은 수 만큼 티켓 생성 (setUserTicket)", () => {
    const mock = jest.fn();
    app.setUserTicket(3).forEach(() => {
      mock();
    });
    expect(mock).toHaveBeenCalledTimes(3);
  });
});
