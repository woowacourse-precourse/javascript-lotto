const CorrectLotto = require("../src/modules/CorrectLotto");

const lottoArr = [
  [8, 21, 23, 41, 42, 43],
  [3, 5, 11, 16, 32, 38],
  [7, 11, 16, 35, 36, 44],
  [1, 8, 11, 31, 41, 42],
  [13, 14, 16, 38, 42, 45],
  [7, 11, 30, 40, 42, 43],
  [2, 13, 22, 32, 38, 45],
  [1, 3, 5, 14, 22, 45],
  [1, 2, 3, 4, 5, 7],
];
const answer = "1,2,3,4,5,6";
const bonus = "7";

describe("로또 번호 일치 테스트", () => {
  test("로또 번호에 당첨 번호가 있다.", () => {
    const CORRECT = new CorrectLotto(lottoArr, answer, bonus);
    expect(CORRECT.haveCorrect()).toMatchObject([0, 2, 0, 1, 0, 0, 1, 3, 5]);
  });
  // 보너스 번호 일치
  test("5개의 번호가 일치, 보너스 번호가 일치", () => {
    const CORRECT = new CorrectLotto(lottoArr, answer, bonus);
    expect(CORRECT.haveBonus()).toBe(true);
  });
});
