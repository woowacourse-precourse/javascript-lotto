const App = require('../src/App.js');
const InputMoneyView = require('../src/view/InputMoneyView.js');
const InputWinningNumberView = require('../src/view/InputWinningNumberView.js');
const LottoMachineController = require('../src/controller/LottoMachineController.js');
const Lotto = require('../src/Lotto.js');
const MissionUtils = require('@woowacourse/mission-utils');
const { createSelectedRangeArray, generateSortedRandomNumber } = require('../src/utils/common.js');
const { RULES, RANKING_ACCORDING_MATCH_COUNT } = require('../src/constants/index.js');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('구입금액 입력 테스트', () => {
  test('1000으로 나누어떨어지지 않는 수를 입력했을 때', () => {
    expect(() => {
      const inputMoneyView = new InputMoneyView();
      inputMoneyView.isValidatePurchaseAmount('100');
    }).toThrow('[ERROR]');
  });

  test('문자를 입력했을 때', () => {
    expect(() => {
      const inputMoneyView = new InputMoneyView();
      inputMoneyView.isValidatePurchaseAmount('*(*)');
    }).toThrow('[ERROR]');
  });

  test('공백을 입력했을 떄', () => {
    expect(() => {
      const inputMoneyView = new InputMoneyView();
      inputMoneyView.isValidatePurchaseAmount(' ');
    }).toThrow('[ERROR]');
  });

  test('0을 입력했을 떄', () => {
    expect(() => {
      const inputMoneyView = new InputMoneyView();
      inputMoneyView.isValidatePurchaseAmount('0');
    }).toThrow('[ERROR]');
  });

  test('음수을 입력했을 떄', () => {
    expect(() => {
      const inputMoneyView = new InputMoneyView();
      inputMoneyView.isValidatePurchaseAmount('-1000');
    }).toThrow('[ERROR]');
  });
});

describe('로또 번호를 발급하는 기능 테스트', () => {
  test('로또 번호 생성', () => {
    mockRandoms([[8, 23, 21, 42, 41, 43]]);
    expect(createSelectedRangeArray(RULES.MIN_LOTTO_NUMBER, RULES.MAX_LOTTO_NUMBER, RULES.LOTTO_NUMS)).toEqual([
      8, 23, 21, 42, 41, 43,
    ]);
  });

  test('로또 번호 오름차순 정렬', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    expect(generateSortedRandomNumber(RULES.MIN_LOTTO_NUMBER, RULES.MAX_LOTTO_NUMBER, RULES.LOTTO_NUMS)).toEqual([
      8, 21, 23, 41, 42, 43,
    ]);
  });
});

describe('당첨번호 입력 유효성 테스트', () => {
  test('6개의 숫자를 입력하지 않았을 때', () => {
    mockQuestions(['1,2,3,4']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputWinningNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });

  test('아무것도 입력하지 않았을 때', () => {
    mockQuestions(['']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputWinningNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });

  test('바로 엔터를 입력했을 때', () => {
    mockQuestions(['\n']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputWinningNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });

  test('숫자외에 다른값과 함께 입력했을 때', () => {
    mockQuestions(['!@#$!@,1,2,3,4,5']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputWinningNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });

  test('중간에 공백이 있을 때', () => {
    mockQuestions(['1, ,2,3,4,5']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputWinningNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });

  test('1-45 범위의 값이 아닐때', () => {
    mockQuestions(['1,0,2,3,4,5']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputWinningNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });

  test('중복 숫자를 입력했을 때', () => {
    mockQuestions(['5,5,5,3,4,5']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputWinningNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });
});

describe('보너스 번호 입력 유효성 테스트', () => {
  test('아무것도 입력하지 않았을 떄', () => {
    mockQuestions(['']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputBonusNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });

  test('빈 공백을 입력했을 때', () => {
    mockQuestions([' ']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputBonusNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });

  test('엔터만 쳤을 때', () => {
    mockQuestions(['\n']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputBonusNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });

  test('숫자를 입력하지 않았을 때', () => {
    mockQuestions(['!DA']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputBonusNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });

  test('로또 숫자 범위가 아닌 수를 입력하였을 떄', () => {
    mockQuestions(['46']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputBonusNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });

  test('로또 숫자 범위가 아닌 수를 입력하였을 떄', () => {
    mockQuestions(['-1']);
    expect(() => {
      const lottoMachineController = new LottoMachineController();
      const inputWinningNumberView = new InputWinningNumberView();
      inputWinningNumberView.inputBonusNumberFromUser(lottoMachineController.judgePurchasedLottoOfResult);
    }).toThrow('[ERROR]');
  });
});

describe('당첨여부를 판단하는 기능 테스트', () => {
  test('1등', () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.checkHowManyCorrect(winningNumber, bonusNumber)).toEqual(6);
  });

  test('2등', () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    expect(lotto.checkHowManyCorrect(winningNumber, bonusNumber)).toEqual('5+bonus');
  });

  test('3등', () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 4, 5, 9]);
    expect(lotto.checkHowManyCorrect(winningNumber, bonusNumber)).toEqual(5);
  });

  test('4등', () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 4, 15, 17]);
    expect(lotto.checkHowManyCorrect(winningNumber, bonusNumber)).toEqual(4);
  });

  test('5등', () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 14, 15, 17]);
    expect(lotto.checkHowManyCorrect(winningNumber, bonusNumber)).toEqual(3);
  });

  test('꽝', () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lotto = new Lotto([11, 12, 13, 14, 15, 17]);
    expect(lotto.checkHowManyCorrect(winningNumber, bonusNumber)).toEqual(0);
  });
});

describe('lottoResult Object 테스트', () => {
  test('1등', () => {
    const lottoResult = { '1등': 0, '2등': 0, '3등': 0, '4등': 0, '5등': 0 };
    const numberArray = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const purchasedLottos = numberArray.map((number) => new Lotto(number));
    purchasedLottos.forEach((lotto) => {
      const matchCount = lotto.checkHowManyCorrect(winningNumber, bonusNumber);
      const ranking = RANKING_ACCORDING_MATCH_COUNT[matchCount];

      if (lottoResult[ranking] === undefined) return;

      lottoResult[ranking] += 1;
    });
    expect(lottoResult).toEqual({ '1등': 0, '2등': 0, '3등': 0, '4등': 0, '5등': 1 });
  });

  test('1등', () => {
    const lottoResult = { '1등': 0, '2등': 0, '3등': 0, '4등': 0, '5등': 0 };
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const matchCount = lotto.checkHowManyCorrect(winningNumber, bonusNumber);
    const ranking = RANKING_ACCORDING_MATCH_COUNT[matchCount];
    if (lottoResult[ranking] === undefined) return;
    lottoResult[ranking] += 1;
    expect(lottoResult).toEqual({ '1등': 1, '2등': 0, '3등': 0, '4등': 0, '5등': 0 });
  });
});
