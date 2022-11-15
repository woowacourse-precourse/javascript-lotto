const Lotto = require("../src/Lotto");
const Constant = require("../src/Constant");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(Constant.LOTTO_NUMBERS_LENGTH_SHOULD_BE6);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(Constant.LOTTO_NUMBERS_SHOULD_BE_UNIQUE);
  });
  test("로또 번호와 사용자가 입력한 로또번호를 비교해서 같은 번호를 세준다.", () => {
    //given
    const randomLottoNumbers = [1, 4, 5, 8, 9, 12];
    const userInputNumbers = [1, 4, 5, 6, 10, 15];
    //when
    const lotto = new Lotto(userInputNumbers);
    //then
    expect(lotto.compareBetween(randomLottoNumbers)).toBe(3);
  });

  test("로또 번호와 사용자가 입력한 로또번호를 비교해서 총 몇개가 같은지 배열에 담아준다..", () => {
    //given
    const randomLottoNumbers = [
      [1, 4, 5, 8, 9, 12],
      [1, 4, 5, 6, 11, 40],
    ];
    const userInputNumbers = [1, 4, 5, 6, 11, 7];
    const bonusNumber = 40;
    //when
    const lotto = new Lotto(userInputNumbers);
    //then
    expect(lotto.compare(randomLottoNumbers, bonusNumber)).toStrictEqual([
      { countSameNumber: 3 },
      { countSameNumber: 5, bonusNumber: true },
    ]);
  });

  test("계산된 로또번호가 몇개가 당첨됐는지 object형태로 만든다..", () => {
    //given
    const countArr = [3, 1, 3];

    const userInputNumbers = [1, 4, 5, 6, 10, 15];
    //when
    const lotto = new Lotto(userInputNumbers);
    //then
    expect(lotto.makeCountObject(countArr)).toStrictEqual({ 1: 1, 3: 2 });
  });
});
