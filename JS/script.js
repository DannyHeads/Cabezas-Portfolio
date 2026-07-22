// =====================================================
// Portfolio Skills
// =====================================================

const skills = [
  "☁ Generative AI",
  "▣ JavaScript",
  "◆ Python",
  "🎓 Teaching & Mentoring",
  "☷ Project Management"
];

const skillList = document.getElementById("skillList");


// =====================================================
// Create Skill Buttons
// =====================================================

function displaySkills() {
  if (!skillList) {
    console.error("The skillList element could not be found.");
    return;
  }

  skills.forEach((skill) => {
    const skillButton = document.createElement("button");

    skillButton.className = "skill";
    skillButton.type = "button";
    skillButton.textContent = skill;

    skillList.appendChild(skillButton);
  });
}


// =====================================================
// Start Portfolio
// =====================================================

displaySkills();