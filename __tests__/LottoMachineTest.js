const LottoMachine = require("../src/domain/LottoMahcine");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 머신 클래스 테스트", () => {
  test("금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine("천원");
    }).toThrow("[ERROR] 금액은 숫자만 입력해야 합니다.");
  });

  test("금액이 1,000원 단위로 입력되지 않을 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine("1500");
    }).toThrow("[ERROR] 금액은 1,000원 단위만 입력 가능합니다.");
  });

  test("로또 머신 클래스를 생성할 때 입력한 금액만큼 로또를 생성한다.", () => {
    const mockArray = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    mockRandoms(mockArray);

    const lottoMachine = new LottoMachine("8000");
    const lottos = lottoMachine.getLottos();

    lottos.forEach((lotto, idx) => {
      expect(lotto.numbers).toEqual(mockArray[idx]);
    });

    MissionUtils.Console.close();
  });
});
