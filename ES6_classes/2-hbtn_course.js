class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    newName = newName.toString().trim();
    if (newName === '') {
        throw 'The name cannot be empty';
    }
  
    this._name = newName;
  }

  get length() {
    return this.length;
  }

  set length(newLen) {
    let isnum = /^\d+$/.test(newLen);
    if (!isnum) {
      throw 'Not a number';
    }
    this._length = Number(newLen);
  }

  get students() {

  }

  set students(newStudents) {
    let isArr = Array.isArray(newStudents);
    if (!isArr) {
      throw 'Not an array';
    }
   
    this._students = newStudents;
  }
}
