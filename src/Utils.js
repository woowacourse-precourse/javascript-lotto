class Utils {
  static includesArray(listA, listB) {
    const stringListA = listA.map((el) => JSON.stringify(el));

    return stringListA.includes(JSON.stringify(listB));
  }
}

module.exports = Utils;
