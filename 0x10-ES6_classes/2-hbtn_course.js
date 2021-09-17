export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }

    if (Array.isArray(students) && students.every((value) => typeof value === 'string')) {
      this.students = students;
    } else {
      throw new TypeError('Studenst must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName) {
      this._name = newName;
    }
  }

  get length() {
    return this._length;
  }

  set length(newLenght) {
    if (newLenght) {
      this._length = newLenght;
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (newStudents) {
      this._students = newStudents;
    }
  }
}
