const LottoNumber = require("../src/domain/LottoNumber");
const { LOTTO_NUMBER } = require("../src/constants/gameCondition");

describe("로또넘버 클래스 테스트", () => {
  test("가져온 로또번호가 6개인지 확인한다.", () => {
    const lotto = LottoNumber.generate();

    expect(lotto.length).toBe(6);
  });

  test("가져온 로또번호가 오름차순인지 확인한다.", () => {
    const lotto = LottoNumber.generate();

    const isSorted = (lotto) => {
      for (let i = 0; i < lotto.length - 1; i++) {
        if (lotto[i] > lotto[i + 1]) return false;
      }
      return true;
    };

    expect(isSorted(lotto)).toBeTruthy();
  });
});
