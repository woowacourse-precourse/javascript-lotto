const Award = require("../src/modules/Award");

const correctArr = [0, 2, 0, 1, 0, 0, 1, 3];
describe("상금 확인 테스트", () => {
  test("3개의 번호가 일치-5등", () => {
    const AWARD = new Award(correctArr);
    expect(AWARD.haveAward()).toMatchObject([5000]);
  });
});
