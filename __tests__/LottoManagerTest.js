const { mockQuestion, mockQuestions, EMPTY_CALLBACK } = require('../src/mock');
const LottoManager = require('../src/LottoManager');

describe('로또 매니저 클래스 테스트 / 당첨 번호 입력', () => {
  const lottoManager = new LottoManager();

  test('당첨 번호 입력이 모두 정수가 아니면 예외가 발생한다. ', () => {
    const answer = '1,2,3,4,5,a';

    mockQuestion(answer);

    expect(() => {
      lottoManager.inputWinningNumber(EMPTY_CALLBACK);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호 입력이 1~45 사이의 입력이 아니면 예외가 발생한다.', () => {
    const answer = '1,2,3,4,5,80';

    mockQuestion(answer);

    expect(() => {
      lottoManager.inputWinningNumber(EMPTY_CALLBACK);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호 입력의 개수가 6개가 아니면 예외가 발생한다. ', () => {
    const answer = '1,2,3,4,5,6,7';

    mockQuestion(answer);

    expect(() => {
      lottoManager.inputWinningNumber(EMPTY_CALLBACK);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호 입력에 중복이 있으면 예외가 발생한다.', () => {
    const answer = '1,2,3,4,5,5';

    mockQuestion(answer);

    expect(() => {
      lottoManager.inputWinningNumber(EMPTY_CALLBACK);
    }).toThrow('[ERROR]');
  });
});

describe('로또 게임 클래스 테스트 / 보너스 번호 입력', () => {
  const lottoManager = new LottoManager();

  test('보너스 번호가 1~45 사이의 입력이 아니라면 예외가 발생한다.', () => {
    const answer = '80';

    mockQuestion(answer);

    expect(() => {
      lottoManager.inputBouseNumber(EMPTY_CALLBACK);
    }).toThrow('[ERROR]');
  });

  test('당첨번호와 보너스번호에 중복이 존재하면 예외가 발생한다. ', () => {
    const winningNumber = '1,2,3,4,5,10';
    const answer = '10';

    mockQuestions([winningNumber, answer]);

    expect(() => {
      lottoManager.inputWinningNumber(EMPTY_CALLBACK);
      lottoManager.inputBouseNumber(EMPTY_CALLBACK);
    }).toThrow('[ERROR]');
  });
});

describe('로또 매니저 클래스 테스트 / 로또 발행', () => {
  const lottoManager = new LottoManager();
  test('원하는 로또 개수가 발행되는지 확인', () => {
    const lottoCount = 2;
    const lottos = lottoManager.publishLottos(lottoCount);

    expect(lottos).toHaveLength(lottoCount);
  });
});
