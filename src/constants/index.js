const PLACE_MESSAGE = {
  first: "6개 일치 (2,000,000,000원) - ",
  second: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  third: "5개 일치 (1,500,000원) - ",
  forth: "4개 일치 (50,000원) - ",
  fifth: "3개 일치 (5,000원) - ",
};

const PLACE_ARR = ["first", "second", "third", "forth", "fifth"];

const WINNING_PRICE = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  forth: 50000,
  fifth: 5000,
};

const INPUT_QUESTION = {
  LOTTO_NUMBER: "당첨 번호를 입력해 주세요.\n",
  BUDGET: "구입금액을 입력해 주세요.\n",
  LOTTO_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

module.exports = {
  PLACE_MESSAGE,
  PLACE_ARR,
  WINNING_PRICE,
  INPUT_QUESTION,
};
