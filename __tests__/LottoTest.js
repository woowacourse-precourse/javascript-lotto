const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

afterAll(() => {
  Console.close();
});

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

  test("생성된 번호로 로또 발행한다.", () => {
    const lottoNumbers = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]
    const lotto = []
    lottoNumbers.forEach(numbers => {
      lotto.push(new Lotto(numbers))
    });

    expect(lotto.length).toBe(3)
  });

  test("발행한 로또의 번호를 오름차순으로 정렬한다.", () => {
    const lotto = new Lotto([21, 8, 1, 19, 36, 45]);
    lotto.getNumber = jest.fn(() => {
      return [21, 8, 1, 19, 36, 45];
    });
    lotto.sort = jest.fn(() => {
      return lotto.getNumber().sort((a, b) => a - b);
    });

    expect(lotto.sort()).toEqual([1, 8, 19, 21, 36, 45]);
  });

});
