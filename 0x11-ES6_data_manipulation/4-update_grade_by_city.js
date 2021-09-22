export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }

  const stCity = students.filter((student) => student.location === city);

  return stCity.map((student) => {
    const gradeF = newGrades.filter(
      (newGrade) => newGrade.studentId === student.id,
    );

    let grade;
    if (gradeF[0]) {
      grade = gradeF[0].grade;
    } else {
      grade = 'N/A';
    }
    return { ...student, grade };
  });
}
