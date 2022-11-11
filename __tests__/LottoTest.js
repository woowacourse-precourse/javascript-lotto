const LottoProgram = require("../src/LottoProgram");
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
  const lottoProgram = new LottoProgram();
  const logSpy = getLogSpy();

  test("start() 메서드의 출력이 제대로 작동하는지 확인합니다.", () => {
    lottoProgram.start();

    expect(logSpy).toHaveBeenCalledWith('구입금액을 입력해주세요.');
  })
});

describe("randomSelectWithoutOverlap()", () => {
  const lottoProgram = new LottoProgram();

  test("randomSelectWithoutOverlap() 메서드의 반환값의 길이가 6인지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      const lottoArray = lottoProgram.randomSelectWithoutOverlap();
      expect(lottoArray.length === 6).toBeTruthy();
    }
  });

  test("randomSelectWithoutOverlap() 메서드의 반환값에 중복되는 요소가있는지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      const lottoArray = lottoProgram.randomSelectWithoutOverlap();
      expect([...new Set(lottoArray)].every((value, idx) => value === lottoArray[idx])).toBeTruthy();
    }
  })
});

describe("isValidLottoArray()", () => {
  const lottoProgram = new LottoProgram();

  test("적절한 로또 번호 배열일 경우 true를 반환해야합니다.", () => {
    expect(lottoProgram.isValidLottoArray([1, 2, 3, 4, 5, 6])).toBeTruthy();
    expect(lottoProgram.isValidLottoArray([1, 20, 31, 41, 42, 43])).toBeTruthy();
    expect(lottoProgram.isValidLottoArray([12, 15, 20, 23, 28, 40])).toBeTruthy();
  });

  test("적절하지 않은 배열일 경우, false를 반환해야 합니다. (유효하지 않은 길이)", () => {
    expect(lottoProgram.isValidLottoArray([1, 2, 3, 4, 5])).toBeFalsy();
    expect(lottoProgram.isValidLottoArray([1, 2, 3, 4, 5, 6, 7])).toBeFalsy();
    expect(lottoProgram.isValidLottoArray([])).toBeFalsy();
  })

  test("적절하지 않은 배열일 경우, false를 반환해야 합니다. (졍렬되지 않은 상태)", () => {
    expect(lottoProgram.isValidLottoArray([15, 7, 3, 2, 10, 14])).toBeFalsy();
    expect(lottoProgram.isValidLottoArray([9, 5, 6, 23, 45, 11])).toBeFalsy();
  })

  test("적절하지 않은 배열일 경우, false를 반환해야 합니다. (중복되는 요소가 존재하는 경우)", () => {
    expect(lottoProgram.isValidLottoArray([15, 7, 3, 2, 10, 14])).toBeFalsy();
    expect(lottoProgram.isValidLottoArray([9, 5, 6, 23, 45, 11])).toBeFalsy();
  })
});

describe("getEachLottoArray()", () => {
  const lottoProgram = new LottoProgram();

  test("getEachLottoArray() 메서드의 반환값의 길이가 6인지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      const lottoArray = lottoProgram.getEachLottoArray();
      expect(lottoArray.length === 6).toBeTruthy();
    }
  });

  test("getEachLottoArray() 메서드의 반환값에 중복되는 요소가있는지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      const lottoArray = lottoProgram.getEachLottoArray();
      expect([...new Set(lottoArray)].every((value, idx) => value === lottoArray[idx])).toBeTruthy();
    }
  })
});