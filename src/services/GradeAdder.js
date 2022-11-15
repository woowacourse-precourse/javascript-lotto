const GRADE = require('../utils/grade');

class GradeAdder {
  static addPrizeToGradeResult(gradeResult, grade) {
    if (grade > GRADE.fifth) {
      return [...gradeResult];
    }

    const newGradeResult = [...gradeResult];
    newGradeResult[grade] += GRADE.prize;

    return newGradeResult;
  }
}

module.exports = GradeAdder;
