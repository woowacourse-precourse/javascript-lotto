const Lotto = require("../src/Lotto");
const WinningNum = require('../src/WinningNum')

describe("로또 클래스 테스트(사용자 구매)", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.");
  });

  test("로또 번호의 범위가 1부터 45사이가 가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, -2, 3, 64, 5, 32]);
    }).toThrow('[ERROR] 로또 번호는 1에서 45사이의 숫자여야 합니다');
  });

  test("로또 번호는 숫자로 이뤄진 값이어야 합니다", () => {
    expect(() => {
      new Lotto([1, '23a', 43, 22, 1, 32]);
    }).toThrow('[ERROR] 로또 번호는 숫자로 이뤄진 값이어야 합니다.');
  });
});


describe("로또 클래스 테스트(당첨 번호)", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
      expect(() => {
        new WinningNum([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
    });
  
    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new WinningNum([1, 2, 3, 4, 5, 5]);
      }).toThrow("[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.");
    });
  
    test("로또 번호의 범위가 1부터 45사이가 가 아니면 예외가 발생한다.", () => {
      expect(() => {
        new WinningNum([1, -2, 3, 64, 5, 32]);
      }).toThrow('[ERROR] 로또 번호는 1에서 45사이의 숫자여야 합니다');
    });
  
    test("로또 번호는 숫자로 이뤄진 값이어야 합니다", () => {
      expect(() => {
        new WinningNum([1, '23a', 43, 22, 1, 32]);
      }).toThrow('[ERROR] 로또 번호는 숫자로 이뤄진 값이어야 합니다.');
    });
  });
  