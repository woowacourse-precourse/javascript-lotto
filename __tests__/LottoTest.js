const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    const lottoNumsCount = 7;
    expect(() => {
      new Lotto(lottoNumsCount);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    const lottoNumsCount = 6;
    const lotto = new Lotto(lottoNumsCount);
    const hasDuplicatedNums = !(lotto.length !== new Set(lotto).size);

    expect(hasDuplicatedNums).toBeTruthy();
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호는 중복도 없고 길이가 6입니다.", () => {
    const lottoNumsCount = 6;
    const lotto = new Lotto(lottoNumsCount);
    const isLengthSix = lotto.length === 6;

    expect(isLengthSix).toBeTruthy();
  });
});
