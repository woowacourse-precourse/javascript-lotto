const Lotto = require("../src/Lotto");
const Constant = require("../src/Constant");
const UI = require("../src/utils/UI");

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
    const randomLottoNumbers = [1, 4, 13, 23, 34, 36];
    const userInputNumbers = [1, 4, 5, 6, 10, 15];
    //when
    const lotto = new Lotto(userInputNumbers);
    //then
    expect(lotto.compare(randomLottoNumbers)).toBe(2);
  });
});
