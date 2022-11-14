const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');

afterEach(() => {
  Console.close();
});

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('Lotto 클래스의 makeSixNumbers() 기능 테스트', () => {
  test('6자리로 만들어지는지 확인', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const numbersLength = lotto.makeSixNumbers().length;
    expect(numbersLength).toBe(6);
  });

  test('6자리 숫자에 중복값은 없는지 확인', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const sixNumbers = lotto.makeSixNumbers();
    const noDuplicateNumber = [...new Set(sixNumbers)];
    expect(sixNumbers.length).toEqual(noDuplicateNumber.length);
  });
});

describe('Lotto 클래스의 makeSixNumbers() 기능 테스트', () => {
  test('유저가 구매한 로또 번호에 중복이 없는지 확인', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoNumbers = lotto.makeSixNumbers();
    const noDuplicateLottoNumbers = [...new Set(lottoNumbers)];
    expect(noDuplicateLottoNumbers.length).toEqual(lottoNumbers.length);
  });
  test('유저가 구매한 로또 번호의 숫자들이 1~45 범위인지 확인', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoNumbers = lotto.makeSixNumbers();
    const correctRangeCheck = lottoNumbers.every(number => number >= 1 && number <= 45);
    expect(correctRangeCheck).toBeTruthy();
  });
});

describe('Lotto 클래스의 bundleCreate() 기능 테스트', () => {
  test('구매한 로또 개수만큼의 번호들이 생성된지 확인', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const purchaseLottoCount = 3;
    const lottoBundle = lotto.bundleCreate(purchaseLottoCount).length;
    expect(lottoBundle).toEqual(purchaseLottoCount);
  });
});

describe('lotto 클래스의 bundleVerifyForWin() 기능 테스트', () => {
  test('로또다발 비교후 등수 출력 확인', () => {
    const winNumbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 9;
    const lottoBundle = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 9],
      [1, 2, 3, 4, 5, 11],
      [9, 11, 22, 33, 44, 45],
      [1, 2, 3, 22, 33, 44],
    ];

    const tobe = {
      fifthGrade: 1,
      forthGrade: 0,
      thirdGrade: 1,
      secondGrade: 1,
      firstGrade: 1,
      loseMoney: 1,
    };
    lotto.bundleVerifyForWin(winNumbers, bonusNumber, lottoBundle);
    expect(lotto.resultMap).toEqual(tobe);
  });
});
