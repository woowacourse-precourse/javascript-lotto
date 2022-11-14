const InputUI = Object.freeze({
  inputPrice: "구입금액을 입력해 주세요.\n",
  lottoNum: "개를 구매했습니다.\n",
  winNumInput: "당첨 번호를 입력해 주세요.\n",
  bonusNumInput: "보너스 번호를 입력해 주세요.\n",
  winStatistic: "당첨 통계\n---",
  Statics: [
    (threeText = "3개 일치 (5,000원) -"),
    (fourText = "4개 일치 (50,000원) -"),
    (fiveText = "5개 일치 (1,500,000원) -"),
    (fivePlusText = "5개 일치, 보너스 볼 일치 (30,000,000원) -"),
    (sixText = "6개 일치 (2,000,000,000원) -"),
  ],
});

const ErrorUI = Object.freeze({
  moneyUnitError: "[ERROR] 금액은 1000원 단위입니다.",
  winLottoCountError: "[ERROR] 로또 번호는 6개여야 합니다.",
  lottoRangeError: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  overlapError: "[ERROR] 중복된 번호는 올 수 없습니다.",
  sameLottoAndBonus: "[ERROR] 당첨 번호와 같은 번호는 올 수 없습니다.",
});

module.exports = { InputUI, ErrorUI };
