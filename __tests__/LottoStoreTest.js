const LottoStore = require("../src/LottoStore");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest
    .fn()
    .mockReturnValue(numbers);
};

describe("Feat 2. LottoStore.generateLotto", () => {
  const lottoStore = new LottoStore();

  test("지불된 돈으로 살 수 있는 로또의 개수를 반환한다.", () => {
    expect(lottoStore.calculateLottoCount(8000)).toBe(8);
  });

  test("살 수 있는 로또의 개수만큼 만든 로또 번호를 반환한다.", () => {
    mockRandoms([1, 2, 3, 4, 5, 6]);
    expect(lottoStore.generateLottoNumber(1).length).toBe(1);
  });
});
