const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

afterAll(() => {
  MissionUtils.Console.close();
});

// describe("로또 클래스 테스트", () => {
//   test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
//     expect(() => {
//       new Lotto([1, 2, 3, 4, 5, 6, 7]);
//     }).toThrow("[ERROR]");
//   });

//   // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
//   test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
//     expect(() => {
//       new Lotto([1, 2, 3, 4, 5, 5]);
//     }).toThrow("[ERROR]");
//   });

// 아래에 추가 테스트 작성 가능
// });

describe("start()", () => {
  const lotto = new Lotto();
  const logSpy = getLogSpy();

  test("start() 메서드의 출력이 제대로 작동하는지 확인합니다.", () => {
    lotto.start();

    expect(logSpy).toHaveBeenCalledWith('구입금액을 입력해주세요.');
  })
});

describe("getEachLottoArray()", () => {
  const lotto = new Lotto();

  test("getEachLottoArray() 메서드의 반환값의 길이가 6인지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      const lottoArray = lotto.getEachLottoArray();
      expect(lottoArray.length === 6).toBeTruthy();
    }
  });

  test("getEachLottoArray() 메서드의 반환값에 중복되는 요소가있는지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      const lottoArray = lotto.getEachLottoArray();
      expect([...new Set(lottoArray)].every((value, idx) => value === lottoArray[idx])).toBeTruthy();
    }
  })
});