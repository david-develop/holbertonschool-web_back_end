export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((students) => students.id);
  }
  return [];
}
