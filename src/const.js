const error_message = {
  not_thousand_won_unit: "[ERROR] 구입 금액은 1,000원 단위입니다",
  not_six_numbers: "[ERROR] 로또 번호는 6개여야 합니다.",
  not_all_numbers: "[ERROR] 로또 번호는 숫자를 입력해야 합니다.",
  not_unique_numbers: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  not_valid_range: "[ERROR] 로또 번호의 숫자 범위는 1~45까지입니다.",

  not_only_num_bouns: "[ERROR] 보너스 번호는 1개 숫자만 입력해야 합니다.",
  not_unique_bonus: "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.",
};

const winning_money = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

module.exports = { error_message, winning_money };
