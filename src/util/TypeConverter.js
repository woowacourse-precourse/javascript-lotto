class TypeConverter {
  static stringToNumber(str) {
    return +str;
  }

  static stringToArray(str, seperator) {
    return str.split(seperator);
  }

  static just(param) {
    return param;
  }
}

module.exports = TypeConverter;
