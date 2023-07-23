import JoinUsSection from "./join-us-section.js";

document.addEventListener("DOMContentLoaded", function () {
  // Initialization logic still occurs here
  // Assuming you want to create the standard program section
  const sectionCreator = {
    create: function (type) {
      switch (type) {
        case "standard":
          return JoinUsSection.createStandardProgram();
        case "advanced":
          return JoinUsSection.createAdvancedProgram();
        default:
          throw new Error("Invalid program type.");
      }
    },
  };

  // Use the factory method to create the standard program section
  sectionCreator.create("standard");
});
