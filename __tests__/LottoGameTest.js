const LottoGame = require('../src/domain/LottoGame');
const User = require('../src/User');

describe('LottoGame 클래스 테스트', () => {
  test('✨ 중복되지 않는 6개의 숫자를 뽑는다.', () => {
    const lottoNumberLength = [...new Set(LottoGame.generateLottoNumbers())].length;
    expect(lottoNumberLength).toBe(6);
  });

  test('✨ 뽑은 숫자는 1부터 45로 이루어져있다.', () => {
    const lottos = [...new Set(LottoGame.generateLottoNumbers())];
    const lotto = lottos.filter((number) => number > 0 && number < 46);
    expect(lotto.length).toBe(6);
  });

  test('✨ 사용자가 투입한 금액에 해당하는 로또 개수를 반환한다. ', () => {
    const lottoGame = new LottoGame();
    const money = 8000;
    expect(lottoGame.countLottos(money)).toBe(8);
  });

  test('✨ 로또 개수만큼 로또 번호를 뽑은 배열을 반환한다. ', () => {
    const lottoQuantity = 8;
    expect(LottoGame.makeLottos(lottoQuantity).length).toBe(8);
    const typeCheck = typeof LottoGame.makeLottos(lottoQuantity);
    expect(typeCheck).toBe('object');
  });

  test('✨ 사용자가 뽑은 로또 번호와 당첨 번호가 일치하는지 확인 후 일치하는 번호의 개수를 반환한다. ', () => {
    const lottoGame = new LottoGame();
    lottoGame.setupWinLottoNumberInfo('1,2,3,4,5,6');
    const userLottoNumbers = '1,2,3,4,5,6';
    expect(lottoGame.countCorrectLottoNumbers(userLottoNumbers)).toBe(6);
  });

  test('✨ 사용자가 뽑은 로또 번호에 보너스 번호가 포함되어 있으면 true를 반환한다.', () => {
    const lottoGame = new LottoGame();
    const userLottoNumbers = [1, 2, 3, 4, 5, 44];
    const bonusNumber = '44';
    expect(lottoGame.hasBonusLottoNumber(bonusNumber, userLottoNumbers)).toBeTruthy();
  });

  test('✨ 수익률을 계산하여 반환한다.', () => {
    const lottoGame = new LottoGame();
    const amountPaid = 8000;
    const correctLottos = {
      three: 1,
      four: 0,
      five: 0,
      six: 0,
      bonus: 0,
    };
    expect(lottoGame.calculateRate([amountPaid, correctLottos])).toBe('62.5');
  });
});
