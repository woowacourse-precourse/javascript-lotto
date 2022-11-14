const Lotto = require("../src/Lotto");
const { LOTTERY_NUMBER_LENGTH, LOTTERY_MIN_NUMBER, LOTTERY_MAX_NUMBER} = require("../src/GameConstants");

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

  test("로또 번호의 개수가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3]);
    }).toThrow(`[ERROR] 로또 번호는 ${LOTTERY_NUMBER_LENGTH}개여야 합니다.`);
  });

  test("로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'zhj']);
    }).toThrow("[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.");

    expect(() => {
      new Lotto(['@', 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.");

    expect(() => {
      new Lotto(['a', 'b', 'c', 'd', 'e', 'f']);
    }).toThrow("[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.");
  });

  test("로또 번호에 정수가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 10.5]);
    }).toThrow("[ERROR] 로또 번호는 정수로만 이루어져야 합니다.");
  });

  test("로또 번호에 숫자 범위가 1~45가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(`[ERROR] 로또 번호는 ${LOTTERY_MIN_NUMBER}~${LOTTERY_MAX_NUMBER}까지의 숫자여야 합니다.`);

    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow(`[ERROR] 로또 번호는 ${LOTTERY_MIN_NUMBER}~${LOTTERY_MAX_NUMBER}까지의 숫자여야 합니다.`);

    expect(() => {
      new Lotto([-1, 2, 3, 4, 5, 6]);
    }).toThrow(`[ERROR] 로또 번호는 ${LOTTERY_MIN_NUMBER}~${LOTTERY_MAX_NUMBER}까지의 숫자여야 합니다.`);
  });
});
