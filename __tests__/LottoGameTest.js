const LottoGame = require('../src/domain/LottoGame');

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

  test('✨ 유저가 투입한 금액에 해당하는 로또 개수를 반환한다. ', () => {
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

  test('✨ 유저가 뽑은 로또 번호와 당첨 번호가 일치하는지 확인 후 일치하는 번호의 개수를 반환한다. ', () => {
    const lottoGame = new LottoGame();
    lottoGame.setupWinLottoNumberInfo('1,2,3,4,5,6');
    const userLottoNumbers = '1,2,3,4,5,6';
    expect(lottoGame.countCorrectLottoNumbers(userLottoNumbers)).toBe(6);
  });

  test('✨ 유저가 뽑은 로또 번호에 보너스 번호가 포함되어 있으면 true를 반환한다.', () => {
    const lottoGame = new LottoGame();
    const userLottoNumbers = [1, 2, 3, 4, 5, 44];
    const bonusNumber = '44';
    expect(lottoGame.hasBonusLottoNumber(bonusNumber, userLottoNumbers)).toBeTruthy();
  });
});
