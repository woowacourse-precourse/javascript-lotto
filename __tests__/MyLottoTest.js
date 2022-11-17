const MissionUtils = require("@woowacourse/mission-utils");
const MyLotto = require("../src/MyLotto");

describe("마이로또 클래스 테스트", () => {
  test("구매금액이 1,000원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new MyLotto(1111);
    }).toThrow("[ERROR]");
  });

  test("countLotto 테스트 - 로또 수량 계산", () => {
    expect(MyLotto.prototype.countLotto(0)).toEqual(0);
    expect(MyLotto.prototype.countLotto(14000)).toEqual(14);
  });

  test("issueLotto 테스트 - 로또 발행", () => {
    const lottoes = MyLotto.prototype.issueLotto(3);
    expect(lottoes.length).toEqual(3);
    lottoes.forEach(lotto => {
      expect(lotto.length).toEqual(6);
    });
  });

  test("sortNumbers 테스트 - 배열 오름차순 정렬", () => {
    expect(MyLotto.prototype.sortNumbers([6,1,5,2,4,3])).toEqual([1,2,3,4,5,6]);
  });

  MissionUtils.Console.close();
});