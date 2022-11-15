class TypeConverter {
  static stringToNumber(str) {
    return +str;
  }

  static stringToArray(str, seperator) {
    return str.split(seperator);
  }
}

module.exports = TypeConverter;
