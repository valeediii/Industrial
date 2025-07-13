const curriculumData = {
  "Semester 1": [
    { name: "Calculus (I)", valid: true },
    { name: "Physics (I)", valid: true },
    { name: "Physics Laboratory (I)", valid: true },
    { name: "Programming Language", valid: true },
    { name: "Chinese (I)", valid: false },
    { name: "English (I)", valid: false },
    { name: "Guarani", valid: false }
  ],
  "Semester 2": [
    { name: "Calculus (II)", valid: true },
    { name: "Physics (II)", valid: true },
    { name: "Physics Laboratory (II)", valid: true },
    { name: "Linear Algebra", valid: true },
    { name: "Engineering Drawing", valid: true },
    { name: "Chinese (II)", valid: false },
    { name: "English (II)", valid: false }
  ],
  "Semester 3": [
    { name: "Ergonomics", valid: true },
    { name: "Introduction to Industrial Engineering", valid: true },
    { name: "Data Structures", valid: true },
    { name: "Object-Oriented Programming", valid: true },
    { name: "Elective (1)", valid: false },
    { name: "Work Studies", valid: true },
    { name: "Chinese (III)", valid: false },
    { name: "English (III)", valid: false }
  ],
  "Semester 4": [
    { name: "Economic Engineering", valid: true },
    { name: "Probability Theory", valid: true },
    { name: "Production Planning and Control", valid: true },
    { name: "Elective (2)", valid: false },
    { name: "Industrial Accounting", valid: true },
    { name: "Quality Control", valid: true },
    { name: "Chinese (IV)", valid: false },
    { name: "English (IV)", valid: false }
  ],
  "Semester 5": [
    { name: "Information Management Systems", valid: true },
    { name: "E-commerce", valid: true },
    { name: "Engineering Statistics", valid: true },
    { name: "Manufacturing Processes", valid: true },
    { name: "Operations Research (I)", valid: true }
  ],
  "Semester 6 ✈️ Exchange Window": [
    { name: "Operations Research (II)", valid: true },
    { name: "Simulation", valid: true },
    { name: "Elective (3)", valid: false },
    { name: "Supply Chains", valid: true },
    { name: "Professional Internship", valid: true }
  ],
  "Semester 7 ✈️ Exchange Window": [
    { name: "Elective (4)", valid: false },
    { name: "Elective (5)", valid: false },
    { name: "Data Mining Applications", valid: true },
    { name: "Inventory Theory", valid: true },
    { name: "Systems Analysis", valid: true },
    { name: "Final Project in Industrial Engineering (I)", valid: true }
  ],
  "Semester 8": [
    { name: "Elective (6)", valid: false },
    { name: "Big Data Analytics", valid: true },
    { name: "Final Project in Industrial Engineering (II)", valid: true }
  ]
};

let completedCount = 0;

function updateExchangeStatus() {
  document.getElementById("completed-count").textContent = completedCount;
  const status = document.getElementById("exchange-status");
  if (completedCount >= 13) {
    status.innerHTML = "✈️ Exchange Eligibility: <strong style='color: green;'>Eligible</strong>";
  } else {
    status.innerHTML = "✈️ Exchange Eligibility: <strong style='color: red;'>Not eligible</strong>";
  }
}

function toggleSubject(element, valid) {
  if (!valid) return;

  const isCompleted = element.classList.toggle("completed");
  completedCount += isCompleted ? 1 : -1;
  updateExchangeStatus();
}

function renderCurriculum() {
  const container = document.getElementById("curriculum");
  for (const semester in curriculumData) {
    const semesterDiv = document.createElement("div");
    semesterDiv.classList.add("semester");

    const title = document.createElement("div");
    title.classList.add("semester-title");
    title.textContent = semester;

    const subjectsDiv = document.createElement("div");
    subjectsDiv.classList.add("subjects");

    curriculumData[semester].forEach(subject => {
      const subjectDiv = document.createElement("div");
      subjectDiv.classList.add("subject");
      if (!subject.valid) subjectDiv.classList.add("non-counting");
      subjectDiv.textContent = subject.name;
      subjectDiv.onclick = () => toggleSubject(subjectDiv, subject.valid);
      subjectsDiv.appendChild(subjectDiv);
    });

    semesterDiv.appendChild(title);
    semesterDiv.appendChild(subjectsDiv);
    container.appendChild(semesterDiv);
  }
}

renderCurriculum();
updateExchangeStatus();

