export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }

  return students.filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.filter((grade) => grade.studentId === student.id);
      let gradeadd;
      if (grades[0]) {
        gradeadd = grades[0].grade;
      } else {
        gradeadd = 'N/A';
      }
      return {
        ...student,
        gradeadd,
      };
    });
}
