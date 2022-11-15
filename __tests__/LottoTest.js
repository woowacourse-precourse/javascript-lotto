const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

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
  test("로또 번호에 숫자가 아닌 입력값이 입력되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "#"]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1부터 45 이외의 숫자가 입력되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 999]);
    }).toThrow("[ERROR]");
  });

  test("당첨로또와 랜덤생성된 개별로또를 비교하여 점수를 생성하는 함수", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningLotto = new Lotto([1, 2, 3, 4, 8, 9]);

    expect(lotto.calculateScore(winningLotto)).toEqual(4);
  });

  test("랜덤 로또를 생성하는 함수", () => {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    const randomLotto = new Lotto(numbers);

    expect(Lotto.createRandomLotto()).toStrictEqual(randomLotto);
  });
});
