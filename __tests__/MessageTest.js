const Message = require("../src/Message");

describe("Message 클래스 테스트", () => {
  test("printPurchase() 메서드는 로또를 구매한 개수를 콘솔에 출력해야 한다.", () => {
    const logSpy = jest.spyOn(console, "log");
    Message.printPurchase(5);
    expect(logSpy).toHaveBeenCalledWith("\n5개를 구매했습니다.");
  });

  test("printLottos() 메서드는 구매한 로또 번호를 콘솔에 출력해야 한다.", () => {
    const logSpy = jest.spyOn(console, "log");
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];
    const logs = [
      "[1, 2, 3, 4, 5, 6]",
      "[7, 8, 9, 10, 11, 12]",
    ];
    Message.printLottos(lottos);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
