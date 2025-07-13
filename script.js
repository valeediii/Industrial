const curriculumData = {
  "Semester 1": [
    "Calculus (I)", "Physics (I)", "Physics Laboratory (I)",
    "Programming Language", "Chinese (I)", "English (I)", "Guarani"
  ],
  "Semester 2": [
    "Calculus (II)", "Physics (II)", "Physics Laboratory (II)",
    "Linear Algebra", "Engineering Drawing", "Chinese (II)", "English (II)"
  ],
  "Semester 3": [
    "Ergonomics", "Introduction to Industrial Engineering", "Data Structures",
    "Object-Oriented Programming", "Elective (1)", "Work Studies",
    "Chinese (III)", "English (III)"
  ],
  "Semester 4": [
    "Economic Engineering", "Probability Theory", "Production Planning and Control",
    "Elective (2)", "Industrial Accounting", "Quality Control",
    "Chinese (IV)", "English (IV)"
  ],
  "Semester 5": [
    "Information Management Systems", "E-commerce", "Engineering Statistics",
    "Manufacturing Processes", "Operations Research (I)"
  ],
  "Semester 6 ✈️ Exchange Window": [
    "Operations Research (II)", "Simulation", "Elective (3)",
    "Supply Chains", "Professional Internship"
  ],
  "Semester 7 ✈️ Exchange Window": [
    "Elective (4)", "Elective (5)", "Data Mining Applications",
    "Inventory Theory", "Systems Analysis", "Final Project in Industrial Engineering (I)"
  ],
  "Semester 8": [
    "Elective (6)", "Big Data Analytics", "Final Project in Industrial Engineering (II)"
  ]
};

let completedCount = 0;
const completedSubjects = new Set();

function updateExchangeStatus() {
  const countSpan = document.getElementById("completed-count");
  const exchangeText = document.getElementById("exchange-status");
  countSpan.textContent = completedCount;

  if (completedCount >= 13) {
    exchangeText.innerHTML = "✈️ Exchange Eligibility: <strong style='color: green;'>Eligible</strong>";
  } else {
    exchangeText.innerHTML = "✈️ Exchange Eligibility: <strong style='color: red;'>Not eligible</strong>";
  }
}

function toggleSubject(element) {
  const subjectName = element.textContent;
  if (element.classList.contains("completed")) {
    element.classList.remove("completed");
    completedSubjects.delete(subjectName);
    completedCount--;
  } else {
    element.classList.add("completed");
    completedSubjects.add(subjectName);
    completedCount++;
  }
  updateExchangeStatus();
}

function renderCurriculum() {
  const container = document.getElementById("curriculum");
  for (let semester in curriculumData) {
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
      subjectDiv.textContent = subject;
      subjectDiv.onclick = () => toggleSubject(subjectDiv);
      subjectsDiv.appendChild(subjectDiv);
    });

    semesterDiv.appendChild(title);
    semesterDiv.appendChild(subjectsDiv);
    container.appendChild(semesterDiv);
  }
}

renderCurriculum();
updateExchangeStatus();
