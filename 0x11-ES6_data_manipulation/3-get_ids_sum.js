export default function getStudentIdsSum(students) {
  return students.map((students) => students.id)
    .reduce((prevVal, curVal) => prevVal + curVal);
}
