import { useState, useEffect } from "react";

const skillOptions = [
  "Java",
  "Kotlin",
  "Git",
  "Android SDK",
  "Android Development",
  "Android",
  "Android Studio",
  "Firebase",
  "SQL",
  "JavaScript",
];

const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

const SkillsSection = ({ formData, setFormData }) => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [showExperience, setShowExperience] = useState(true);

  // Load skills from formData, default to an empty array if undefined
  useEffect(() => {
    if (!formData.skills) {
      setFormData((prev) => ({ ...prev, skills: [] }));
    }
  }, []);

  const skills = formData.skills || [];

  // Add a new skill
  const addSkill = () => {
    if (
      selectedSkill &&
      !skills.some((skill) => skill.name === selectedSkill)
    ) {
      const updatedSkills = [
        ...skills,
        { name: selectedSkill, level: "Intermediate" },
      ];
      setFormData((prev) => ({ ...prev, skills: updatedSkills }));
      setSelectedSkill(""); // Reset dropdown
    }
  };

  // Remove skill
  const removeSkill = (skillName) => {
    const updatedSkills = skills.filter((skill) => skill.name !== skillName);
    setFormData((prev) => ({ ...prev, skills: updatedSkills }));
  };

  // Update experience level
  const updateSkillLevel = (index, level) => {
    const updatedSkills = [...skills];
    updatedSkills[index].level = level;
    setFormData((prev) => ({ ...prev, skills: updatedSkills }));
  };

  return (
    <main className="">
      <h2 className="text-2xl font-bold mb-2">Skills</h2>
      <p className="text-sm text-gray-500 mb-4">
        Choose 5 important skills that show you fit the position.
      </p>

      {/* Toggle Experience Visibility */}
      <div className="flex items-center mb-4">
        <label className="text-sm text-gray-600 mr-2">
          Don't show experience level
        </label>
        <input
          type="checkbox"
          checked={!showExperience}
          onChange={() => setShowExperience(!showExperience)}
          className="toggle-checkbox"
        />
      </div>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={skill.name}
            className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full flex items-center space-x-2"
          >
            {skill.name}
            <button
              onClick={() => removeSkill(skill.name)}
              className="ml-2 text-white hover:text-gray-300"
            >
              ✕
            </button>
          </span>
        ))}
      </div>

      {/* Skill Selection Dropdown */}
      <div className="flex gap-2">
        <select
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">Select a skill</option>
          {skillOptions.map(
            (skill) =>
              !skills.some((s) => s.name === skill) && (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              )
          )}
        </select>
        <button
          onClick={addSkill}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>

      {/* Skill List with Experience Level */}
      <div className="mt-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="p-3 border rounded mb-2">
            <div className="flex justify-between">
              <h3 className="font-semibold">{skill.name}</h3>
              {showExperience && (
                <span className="text-blue-600">{skill.level}</span>
              )}
            </div>

            {/* Experience Selector */}
            {showExperience && (
              <div className="mt-2">
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="1"
                  value={experienceLevels.indexOf(skill.level)}
                  onChange={(e) =>
                    updateSkillLevel(index, experienceLevels[e.target.value])
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  {experienceLevels.map((level, idx) => (
                    <span key={idx}>{level}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default SkillsSection;
