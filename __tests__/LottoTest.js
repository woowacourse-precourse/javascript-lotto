const Lotto = require("../src/models/Lotto");
const LottoPayment = require("../src/models/LottoPayment");
const LottoIsuued = require("../src/models/LottoIssued");
const LottoWinning = require("../src/models/LottoWinning");
const {ERROR} = require("../src/utils/Constants")

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR.LOTTO_COUNT);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR.LOTTO_DUPLICATE);
  });

  test("로또 번호에 1보다 작거나 45보다 큰 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR.LOTTO_RANGE);
  });

  test("로또 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "h"]);
    }).toThrow(ERROR.LOTTO_TYPE);
  });

  test("구매 금액은 1000단위만 입력 가능하다.", () => {
    const input = 1500;
    expect(() => {
      new LottoPayment(input);
    }).toThrow();
  });

  test("구매 금액은 숫자만 입력 가능하다.", () => {
    const input = "testPayment";
    expect(() => {
      new LottoPayment(input);
    }).toThrow();
  });

  test("로또금액에 따른 구매가능한 로또 개수를 계산한다.", () => {
    const input = 8000;
    const output = 8;

    const buyer = new LottoPayment(input);

    expect(buyer.lottoCount).toEqual(output);
  });

  test("로또 구매 개수만큼 로또를 발행한다.", () => {
    const lottoCount = 3;
    const output = 3;

    const lottoIssued = new LottoIsuued(lottoCount);

    expect(lottoIssued.lottoIssued).toHaveLength(output);
  });

  test("보너스 번호는 숫자여야 합니다.", () => {
    const input = "k";

    const winnigLotto = new LottoWinning();

    expect(() => {
      winnigLotto.setBonusNumber(input);
    }).toThrow();
  });

  test("보너스 번호는 당첨 번호와 중복되지 않습니다.", () => {
    const winningInput = "1,2,3,4,5,6";
    const input = "3";

    const winnigLotto = new LottoWinning();
    winnigLotto.setWinningLotto(winningInput);

    expect(() => {
      winnigLotto.setBonusNumber(input);
    }).toThrow();
  });
});
