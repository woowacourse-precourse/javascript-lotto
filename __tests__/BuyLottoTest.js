const BuyLotto = require("../src/BuyLotto");
const MissionUtils = require("@woowacourse/mission-utils");

afterAll(() => {
  MissionUtils.Console.close();
});

const buyLotto = new BuyLotto();

describe("getEachLottoArray()", () => {
  test("getEachLottoArray() 메서드의 반환값의 길이가 6인지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      const lottoArray = buyLotto.getEachLottoArray();
      expect(lottoArray.length === 6).toBeTruthy();
    }
  });

  test("getEachLottoArray() 메서드의 반환값에 중복되는 요소가있는지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      const lottoArray = buyLotto.getEachLottoArray();
      expect([...new Set(lottoArray)].every((value, idx) => value === lottoArray[idx])).toBeTruthy();
    }
  })
});