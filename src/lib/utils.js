/**
 * 교집합(set1 & set2)를 반환한다.
 * @param {Set<*>} set1
 * @param {Set<*>} set2
 */
const getIntersection = (set1, set2) => {
  return new Set([...set1].filter((x) => set2.has(x)))
}

module.exports = {
  getIntersection,
}
