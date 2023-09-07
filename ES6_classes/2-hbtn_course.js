export default class HolbertonCourse {
  constructor(name, length, students) {
    if (!isNaN(name)) {
      throw 'TypeError: Name must be a string';
    }
    if ((typeof length) != "number") {
      throw 'TypeError: Length must be a number';
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (!isNaN(newName)) {
        throw 'TypeError: Name must be a string';
    }
    this._name = newName;
  }

  get length() {
    return this.length;
  }

  set length(newLen) {
    if ((typeof newLen) != "number") {
      throw 'TypeError: Length must be a number';
    }
    this._length = Number(newLen);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    let isArr = Array.isArray(newStudents);
    if (!isArr) {
      throw 'Not an array';
    }
   
    this._students = newStudents;
  }
}
