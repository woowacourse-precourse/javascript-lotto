const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });
  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
  // 아래에 추가 테스트 작성 가능
  test("로또 번호가 1부터 45사이의 숫자가 아니면 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 100]);
    }).toThrow("[ERROR]");
  });
  test("금액만큼 무작위 숫자의 로또를 생성한다.", () => {
    Lotto.generateNumbers = jest.fn();
    Lotto.generateNumbers.mockImplementation(() => {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      return numbers;
    });
    const amount = 8000;
    const count = amount / 1000;
    const logSpy = jest.spyOn(Lotto, "generateNumbers");
    const lottoList = Lotto.purchase(amount);
    expect(lottoList.length).toBe(count);
    expect(logSpy).toHaveReturnedTimes(count);
  });

  test("로또의 결과를 판별한다", () => {
    const lottoList = Lotto.purchase(8000);
    Lotto.prototype.winNumbers = [1, 2, 3, 4, 5, 6];
    Lotto.prototype.bonusNumber = 7;

    const resultList = lottoList.map(Lotto.draw);
    const validate = resultList.every(
      (count) => (count >= 0 && count <= 6) || count === "BONUS"
    );
    expect(resultList.length).toBe(8);
    expect(validate).toBe(true);
  });
});
