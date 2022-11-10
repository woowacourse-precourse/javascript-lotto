const LottoMachine = require("../src/LottoMachine");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

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

  test("로또 머신 클래스를 생성할 때 입력한 금액만큼 로또를 생성한다.", ()=> {
    const lottoMachine = new LottoMachine("8000");
    const lottos = lottoMachine.generateLottos();
    expect(lottos).toHaveLength(8);
  })
});
