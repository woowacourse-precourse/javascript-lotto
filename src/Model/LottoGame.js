class LottoGame {
  lottos = [];
  money;
  winLotto;
  bonusNumber;

  checkMoney(money) {
    if (money % 1000 != 0) {
      throw new Error('[ERROR] 돈은 1000원단위여야 합니다!');
    }
  }

  checkBonusNumber(inputNumber) {
    if (this.winLotto.lottoNumbers.includes(Number(inputNumber))) {
      throw new Error('[ERROR] 보너스 숫자와 정답 로또 숫자가 중복되었습니다.');
    }
  }
}
module.exports = LottoGame;
