const Lotto = require("../src/Lotto");
const LottoFactory = require("../src/LottoFactory");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복되지 않아야 합니다");
  });

  test("로또 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR] 로또 번호는 숫자로 구성되어야 합니다");
  });
});

describe("로또 팩토리 클래스 테스트", () => {
  test("1 ~ 45 사이의 중복되지 않은 숫자 6개를 오름차순으로 반환한다", () => {
    const lottoFactory = new LottoFactory();
    const numbers = lottoFactory.makeLotto();
    expect(numbers.length).toEqual(6);
    expect(
      numbers.filter((number) => number >= 1 && number <= 45).length
    ).toEqual(6);
    expect(numbers.filter((number) => !isNaN(Number(number))).length).toEqual(
      6
    );
    expect(new Set(numbers).size).toEqual(6);
    expect(
      numbers.filter((number, index) => {
        if (index === 0) return true;
        if (number > numbers[index - 1]) return true;
      }).length
    ).toEqual(6);
  });

  test("숫자를 오름차순으로 정렬해 준다", () => {
    const lottoFactory = new LottoFactory();
    const numbers = [6, 5, 4, 3, 2, 1];
    lottoFactory.sortNumber(numbers);
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
