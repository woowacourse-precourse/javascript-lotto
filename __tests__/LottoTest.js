const Lotto = require("../src/domain/lotto/Lotto");
const LottoHasDuplicatedException = require("../src/exception/lotto/LottoHasDuplicatedException");
const LottoLengthException = require("../src/exception/lotto/LottoLengthException");

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
  test("로또 번호의 개수가 6이 아닌 경우", () => {
    expect(() => {
      new Lotto([]);
    }).toThrow(LottoLengthException);
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(LottoLengthException);
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(LottoLengthException);
  })
  
  test("로또 번호에 중복이 존재하는 경우", () => {
    expect(() => {
      new Lotto([1, 1, 1, 1, 1, 1]);
    }).toThrow(LottoHasDuplicatedException);
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(LottoHasDuplicatedException);
  })
});
