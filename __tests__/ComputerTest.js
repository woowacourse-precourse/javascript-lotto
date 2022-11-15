const Computer = require("../src/Computer");

describe("Computer 클래스 테스트", () => {
  test("보너스 번호가 1~45의 범위에 없으면 예외가 발생한다.", () => {
    expect(() => {
      const computer = new Computer("1,2,3,4,5,6");
      computer.setBonusNumber(100);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호의 숫자와 겹치면 예외가 발생한다.", () => {
    expect(() => {
      const computer = new Computer("1,2,3,4,5,6");
      computer.setBonusNumber(1);
    }).toThrow("[ERROR]");
  });

  test("총 상금 구하기", () => {
    const computer = new Computer("1,2,3,4,5,6");
    computer.setBonusNumber(7);
    computer.getMatchs([[1, 2, 3, 4, 5, 6]]);

    expect(computer.getTotalRevenue()).toBe(2000000000);
  });
});
