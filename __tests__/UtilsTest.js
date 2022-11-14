const { round, changePrintFormat, toLocaleMoney } = require("../src/utils/utils");

describe("두번째 자리에서 반올림 테스트", () => {
  test("소수점 첫째자리까지 출력", () => {
    expect(round(2.13)).toEqual("2.1");
  });
});

describe("출력 포맷 서식 지정 테스트", () => {
  test("%s가 대체된다.", () => {
    changePrintFormat();
    expect("%s가 대체된다.".format("퍼센트에스"))
      .toEqual("퍼센트에스가 대체된다.");
  });
});

describe("원화 테스트", () => {
  test("세자리 씩 끊어서 표시된다.", () => {
    expect(toLocaleMoney(100000)).toEqual('100,000');
  });
});
