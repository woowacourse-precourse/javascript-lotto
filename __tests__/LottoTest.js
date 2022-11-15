const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, NaN, NaN]);
    }).toThrow("[ERROR]");
  });
  
  test("로또 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 52, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonus(5);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 6개 일치하면 1등 당첨된다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoNumbers = [[1, 2, 3, 4, 5, 6]];
    const bonusNumber = 7;
    const result = {firstPlace: 1, secondPlace: 0, thirdPlace: 0, fourthPlace: 0, fifthPlace: 0};
    expect(lotto.checkLotto(lottoNumbers, bonusNumber)).toStrictEqual(result);
  });

  test("로또 번호가 5개 번호 + 보너스 번호 일치하면 2등 당첨된다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoNumbers = [[1, 2, 3, 4, 5, 7]];
    const bonusNumber = 7;
    const result = {firstPlace: 0, secondPlace: 1, thirdPlace: 0, fourthPlace: 0, fifthPlace: 0};
    expect(lotto.checkLotto(lottoNumbers, bonusNumber)).toStrictEqual(result);
  });

  test("로또 번호가 5개 일치하면 3등 당첨된다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoNumbers = [[1, 2, 3, 4, 5, 8]];
    const bonusNumber = 7;
    const result = {firstPlace: 0, secondPlace: 0, thirdPlace: 1, fourthPlace: 0, fifthPlace: 0};
    expect(lotto.checkLotto(lottoNumbers, bonusNumber)).toStrictEqual(result);
  });

  test("로또 번호가 4개 일치하면 4등 당첨된다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoNumbers = [[1, 2, 3, 4, 8, 9]];
    const bonusNumber = 7;
    const result = {firstPlace: 0, secondPlace: 0, thirdPlace: 0, fourthPlace: 1, fifthPlace: 0};
    expect(lotto.checkLotto(lottoNumbers, bonusNumber)).toStrictEqual(result);
  });

  test("로또 번호가 3개 일치하면 5등 당첨된다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoNumbers = [[1, 2, 3, 8, 9, 10]];
    const bonusNumber = 7;
    const result = {firstPlace: 0, secondPlace: 0, thirdPlace: 0, fourthPlace: 0, fifthPlace: 1};
    expect(lotto.checkLotto(lottoNumbers, bonusNumber)).toStrictEqual(result);
  });
});
