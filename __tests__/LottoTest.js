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

  test("로또 번호에 들어오는 값이 1~45 사이가 아니라면 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });
  
  test("구입한 로또 리스트와 보너스 번호를 넣으면 일치하는 개수의 숫자를 출력한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.returnSameNumberCount([1, 2, 3, 4, 5, 6], 7)).toBe(6);
  });

  test("로또 번호가 5개 일치하고 보너스 번호가 일치하다면 'Bonus'를 출력한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.returnSameNumberCount([1, 2, 3, 4, 5, 9], 6)).toBe("Bonus");
  });

});
