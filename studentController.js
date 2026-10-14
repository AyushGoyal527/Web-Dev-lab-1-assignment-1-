// Temporary in-memory data. Records reset when the server restarts.
let students = [
  { id: 1, name: 'Rahul', course: 'BTech' },
  { id: 2, name: 'Priya', course: 'BCA' }
];

// GET /students
exports.getStudents = (req, res) => {
  res.json(students);
};

// GET /students/:id
exports.getStudentById = (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((item) => item.id === id);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  res.json(student);
};

// POST /students
exports.addStudent = (req, res) => {
  const { name, course } = req.body;

  if (typeof name !== 'string' || !name.trim() ||
      typeof course !== 'string' || !course.trim()) {
    return res.status(400).json({
      message: 'name and course are required as non-empty strings'
    });
  }

  const nextId = students.length
    ? Math.max(...students.map((item) => item.id)) + 1
    : 1;

  const student = {
    id: nextId,
    name: name.trim(),
    course: course.trim()
  };

  students.push(student);
  res.status(201).json(student);
};

// PUT /students/:id
exports.updateStudent = (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((item) => item.id === id);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  const { name, course } = req.body;

  if (name !== undefined) {
    if (typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({
        message: 'name must be a non-empty string'
      });
    }
    student.name = name.trim();
  }

  if (course !== undefined) {
    if (typeof course !== 'string' || !course.trim()) {
      return res.status(400).json({
        message: 'course must be a non-empty string'
      });
    }
    student.course = course.trim();
  }

  res.json(student);
};

// DELETE /students/:id
exports.deleteStudent = (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  students.splice(index, 1);
  res.json({ message: 'Student deleted successfully' });
};
