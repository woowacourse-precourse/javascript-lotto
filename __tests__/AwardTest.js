const Award = require("../src/modules/Award");

const correctArr = [0, 2, 0, 1, 0, 0, 3, 1];
const correctArr2 = [0, 2, 0, 1, 0, 0, 4, 1];
const correctArr3 = [0, 2, 0, 1, 0, 0, 5, 1];
const correctArr4 = [0, 2, 0, 1, 0, 0, 5, 7];
const correctArr5 = [0, 2, 0, 1, 0, 0, 6, 1];
let bonusBoolean = false;
describe("상금 확인 테스트", () => {
  test("3개의 번호가 일치-5등", async () => {
    const AWARD = new Award(correctArr, bonusBoolean);
    await expect(AWARD.haveAward()).toBe(5000);
  });
  test("4개의 번호가 일치-4등", async () => {
    const AWARD = new Award(correctArr2, bonusBoolean);
    await expect(AWARD.haveAward()).toBe(50000);
  });
  test("5개의 번호가 일치-3등", async () => {
    const AWARD = new Award(correctArr3, bonusBoolean);
    await expect(AWARD.haveAward()).toBe(1500000);
  });
  test("5개의 번호가 일치 + 보너스 번호가 일치-2등", async () => {
    bonusBoolean = true;
    const AWARD = new Award(correctArr4, bonusBoolean);
    await expect(AWARD.haveAward()).toBe(30000000);
  });
  test("6개의 번호가 일치-1등", async () => {
    const AWARD = new Award(correctArr5, bonusBoolean);
    await expect(AWARD.haveAward()).toBe(2000000000);
  });
});
