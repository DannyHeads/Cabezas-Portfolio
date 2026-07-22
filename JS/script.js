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
// Expandable NASA Project Card
// =====================================================

const nasaProjectCard = document.getElementById("nasaProjectCard");
const nasaProjectDetails = document.getElementById("nasaProjectDetails");

function toggleNasaProjectCard() {
  if (!nasaProjectCard || !nasaProjectDetails) {
    return;
  }

  const isExpanded = nasaProjectCard.classList.toggle("expanded");

  nasaProjectCard.setAttribute(
    "aria-expanded",
    isExpanded.toString()
  );

  nasaProjectDetails.setAttribute(
    "aria-hidden",
    (!isExpanded).toString()
  );
}


// =====================================================
// Card Mouse Controls
// =====================================================

if (nasaProjectCard) {
  nasaProjectCard.addEventListener("click", (event) => {
    const clickedLink = event.target.closest("a");

    // Allow project links to open without closing the card.
    if (clickedLink) {
      return;
    }

    toggleNasaProjectCard();
  });


  // =====================================================
  // Card Keyboard Controls
  // =====================================================

  nasaProjectCard.addEventListener("keydown", (event) => {
    const pressedEnter = event.key === "Enter";
    const pressedSpace = event.key === " ";

    if (pressedEnter || pressedSpace) {
      event.preventDefault();
      toggleNasaProjectCard();
    }
  });
}


// =====================================================
// Start Portfolio
// =====================================================

displaySkills();