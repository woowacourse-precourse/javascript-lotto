/* eslint-disable no-new */
const Lotto = require('../src/Lotto');
const App = require('../src/App');
const ErrorInfo = require('../src/ErrorInfo');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
});

describe('로또 구입 금액 유효성 검사', () => {
  test('로또 구입 금액은 숫자여야 하고, 1000원 미만일 수 없다.', () => {
    const app = new App();
    const testInput = ['0', '-1000', '990', 'abc', 'a98bc'];
    testInput.forEach((testElement) => {
      const result = app.isValidMoney(testElement);
      expect(result).toEqual(false);
    });
  });

  test('로또 구입 금액은 1000원 단위여야 한다.', () => {
    const app = new App();
    const testInput = ['9900', '9000', '9856', '14000', '1450001', '185000'];
    const testOutput = [false, true, false, true, false, true];
    testInput.forEach((testElement, idx) => {
      const result = app.isValidMoney(testElement);
      expect(result).toEqual(testOutput[idx]);
    });
  });
});

describe('countLotteries 함수 테스트', () => {
  test('구입금액에 해당하는 만큼 로또 발행 검사', () => {
    const app = new App();
    const testInput = ['9000', '10000', '11000', '178000', '959000'];
    const testOutput = [9, 10, 11, 178, 959];
    testInput.forEach((testElement, idx) => {
      const result = app.countLotteries(testElement);
      expect(result).toEqual(testOutput[idx]);
    });
  });
});

describe('issueLotteries 함수 테스트', () => {
  const lotteryQuantity = [7, 8, 9, 10];
  test('로또 발행 갯수 만큼 랜덤 배열 생성', () => {
    lotteryQuantity.forEach((testElement, idx) => {
      const app = new App();
      const LotteryLength = app.pickRandomLotteries(testElement).length;
      expect(LotteryLength).toEqual(lotteryQuantity[idx]);
    });
  });
  test('발행된 로또 번호가 오름차순 정렬인지 확인', () => {
    lotteryQuantity.forEach((testElement) => {
      const app = new App();
      const LotteryArray = app.pickRandomLotteries(testElement);
      LotteryArray.forEach((oneLottery) => {
        const originLottery = oneLottery;
        const copyArray = originLottery.slice();
        const sortedArray = copyArray.sort((a, b) => a - b);
        expect(originLottery).toEqual(sortedArray);
      });
    });
  });
});

describe('LottoInstance 테스트', () => {
  test('인수로 받은 숫자배열과 로또 인스턴스의 #numbers가 같은지 확인', () => {
    const testInput = [
      [1, 2, 3, 4, 5, 6],
      [34, 45, 1, 8, 7, 6],
      [6, 7, 8, 10, 44, 33],
    ];
    testInput.forEach((testArray) => {
      const lottoInstance = new Lotto(testArray);
      expect(lottoInstance.getNumbers()).toEqual(testArray);
    });
  });
});

describe('isValidNumber 테스트', () => {
  test('보너스 숫자 유효성검사', () => {
    const errInfo = new ErrorInfo();
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const testBonusNumber = ['0', 'abc', '12', '67', '7', '3'];
    const testOutput = [false, false, true, false, true, false];
    testBonusNumber.forEach((bonusNumber, idx) => {
      const result = errInfo.isValidNumber(bonusNumber, winningLotto);
      expect(result).toEqual(testOutput[idx]);
    });
  });
});
