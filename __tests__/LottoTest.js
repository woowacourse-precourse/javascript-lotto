const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("validate(), 로또 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrowError("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("validate(), 로또 번호가 아무것도 들어오지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("validate(), 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("validate(), 로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다. 1. 문자", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "육"]);
    }).toThrow("[ERROR]");
  })

  test("validate(), 로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다. 2. 특수문자", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "!"]);
    }).toThrow("[ERROR]");
  })

  test("validate(), 로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다. 3. 이스케이프 시퀀스", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "\t\w"]);
    }).toThrow("[ERROR]");
  })

  test("validata(), 로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다. 4. undefined", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, undefined]);
    }).toThrow("[ERROR]");
  })
  
  test("validata(), 로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다. 5. null", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, null]);
    }).toThrow("[ERROR]");
  })

  test("calRank(), 일치하는 번호를 세고 등수를 출력한다.", () => {
    const winningLottos = [
      [1, 2, 3, 7, 8, 9, 10],
      [1, 2, 3, 4, 7, 8, 9],
      [1, 2, 3, 4, 5, 7, 8],
      [1, 2, 3, 4, 5, 7, 6],
      [1, 2, 3, 4, 5, 6, 7]
    ];
    const expectRank = [5, 4, 3, 2, 1];
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    winningLottos.forEach((numbers, index) => {
      expect(lotto.calRank(numbers)).toEqual(expectRank[index]);
    })
  })

  test("standardOfRank(), 카운트 개수와 플래그로 등수를 반환한다.",() => {
    const countAndFlag = [
      [3, false],
      [4, false],
      [5, false],
      [5, true],
      [6, false]
    ];
    const expectRank = [5, 4, 3, 2, 1];
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    
    countAndFlag.forEach((element, index) => {
      const count = element[0];
      const flag = element[1];
      expect(lotto.standardOfRank(count, flag)).toEqual(expectRank[index]);
    });
  })
});
