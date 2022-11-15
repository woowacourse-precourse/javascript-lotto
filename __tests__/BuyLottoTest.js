const BuyLotto = require("../src/BuyLotto");
const MissionUtils = require("@woowacourse/mission-utils");

afterAll(() => {
  MissionUtils.Console.close();
});

describe("BuyLotto클래스 테스트", () => {
  const buyLotto = new BuyLotto(1000);
  const lottoArray = buyLotto.getLottoArray();
  test("getEachLottoArray() 메서드의 반환값의 길이가 6인지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      expect(lottoArray[i].length === 6).toBeTruthy();
    }
  });

  test("getEachLottoArray() 메서드의 반환값에 중복되는 요소가있는지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      expect([...new Set(lottoArray[i])].every((value, idx) => value === lottoArray[i][idx])).toBeTruthy();
    }
  })
});