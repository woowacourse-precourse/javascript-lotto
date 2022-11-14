class Message {
    static INPUT_ERROR = "[ERROR] 숫자만 입력 가능합니다.\n";
    static UNIT_ERROR = "[ERROR] 금액 단위는 1,000원 입니다.\n";
    static COUNT_ERROR = "[ERROR] 로또 번호는 6개여야 합니다.\n";
    static NUMBER_ERROR = "[ERROR] 로또 번호에 중복된 숫자가 없어야 합니다.\n";
}

module.exports = Message;