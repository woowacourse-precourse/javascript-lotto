const Print = require("../src/modules/Print");

const correctArr = [0, 2, 0, 1, 0, 0, 1, 3];

describe("로또 일치 개수 객체 출력", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", async () => {
    const PRINT = new Print();
    const object = PRINT.haveObject(correctArr);
    await expect(object).toMatchObject({ 3: 1, 4: 0, 5: 0, 6: 0, 5.5: 0 });
  });
});
