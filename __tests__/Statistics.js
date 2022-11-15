const Lotto = require("../src/Lotto/Lotto");
const Bonus = require("../src/Lotto/Bonus");
const Statistics = require("../src/Statistics/Statistics");
const MissionUtils = require("@woowacourse/mission-utils");
const { RESULT } = require("../src/Constants");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const lottos = [
  new Lotto([1, 23, 4, 10, 11, 12]),
  new Lotto([10, 11, 12, 13, 14, 15]),
  new Lotto([10, 11, 12, 13, 14, 15]),
  new Lotto([10, 11, 12, 13, 14, 15]),
  new Lotto([10, 11, 12, 13, 14, 15]),
  new Lotto([10, 11, 12, 13, 14, 15]),
  new Lotto([10, 11, 12, 13, 14, 15]),
  new Lotto([10, 11, 12, 13, 14, 15]),
];
const winner = new Lotto([1, 23, 4, 10, 11, 2]);
const bonus = new Bonus([12], winner);
const result = new Statistics({
  lottos: lottos,
  winning: winner,
  bonus: bonus,
  amount: 8,
});

describe("통계 클래스 테스트", () => {
  test("print() 함수를 사용하여 예상대로 출력되는지 확인", () => {
    const logs = [
      RESULT.title,
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 375,000.0%입니다.",
    ];
    const logSpy = getLogSpy();
    result.print();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
