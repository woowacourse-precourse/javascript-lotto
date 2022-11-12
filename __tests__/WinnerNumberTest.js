const MissionUtils = require("@woowacourse/mission-utils");
const WinnerNumber = require("../src/WinnerNumber");

describe("당첨번호 예외 테스트", () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test("범위초과 숫자인 46이 포함 되어 있을 경우 예외 발생", () => {
    expect(() => {
      new WinnerNumber("1,2,3,4,5,46");
    }).toThrow("[ERROR] 쉼표(,)를 기준으로 1부터 45까지의 숫자만 입력 해주세요");
  });

  test("범위초과 숫자인 0이 포함 되어 있을 경우 예외 발생", () => {
    expect(() => {
      new WinnerNumber("1,2,3,4,5,0");
    }).toThrow("[ERROR] 쉼표(,)를 기준으로 1부터 45까지의 숫자만 입력 해주세요");
  });

  test("문자가 포함되어 있을 경우 예외 발생", () => {
    expect(() => {
      new WinnerNumber("1,2,3,4,5,a");
    }).toThrow("[ERROR] 쉼표(,)를 기준으로 1부터 45까지의 숫자만 입력 해주세요");
  });

  test("쉼표(,)를 기준으로 6자리가 아닌경우 예외 발생", () => {
    expect(() => {
      new WinnerNumber("1,2,3,4,5 6");
    }).toThrow("[ERROR] 쉼표(,)를 기준으로 6자리를 입력해주세요");
  });

  test("중복된 숫자가 입력된 경우 예외 발생", () => {
    expect(() => {
      new WinnerNumber("1,2,3,4,5,5");
    }).toThrow("[ERROR] 중복없이 숫자를 입력해주세요.");
  });
});
