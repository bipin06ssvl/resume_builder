import React, { useState } from "react";

const Education = ({ formData, setFormData }) => {
  const education = formData.education || [];
  const [expandedIndex, setExpandedIndex] = useState(null); // Track open section

  // Function to add a new employment entry
  const addEducation = () => {
    const newEducation = {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    };

    setFormData({
      ...formData,
      education: [...education, newEducation],
    });

    setExpandedIndex(education.length); // Expand the newly added section
  };

  // Function to update a specific employment entry
  const handleEducationChange = (index, field, value) => {
    const updateEducation = [...education];
    updateEducation[index][field] = value;

    setFormData({
      ...formData,
      education: updateEducation,
    });
  };

  // Function to remove an employment entry
  const removeEducation = (index) => {
    const updateEducation = education.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      education: updateEducation,
    });

    // If removing the currently open section, collapse it
    if (expandedIndex === index) {
      setExpandedIndex(null);
    }
  };

  // Function to toggle expansion
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="">
      <h2 className="text-2xl font-bold mb-2">Education</h2>
      <p className="text-sm text-gray-500 mb-4">
        A varied education on your resume sums up the value that your learnings
        and background will bring to job.
      </p>

      {/* Show "Add education" button initially */}
      {education.length === 0 && (
        <button
          className="bg-blue-100 text-blue-600 py-2 px-4 rounded w-full text-left font-semibold"
          onClick={addEducation}
        >
          + Add education
        </button>
      )}

      {/* Render education Entries */}
      {education.map((education, index) => (
        <div key={index} className="border rounded-lg p-4 mb-4 bg-gray-50">
          {/* Toggleable Title Section */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <h3 className="font-semibold text-lg">
              {education.degree || "Degree"} at {education.school || "School"}
            </h3>
            <span>{expandedIndex === index ? "▲" : "▼"}</span>
          </div>

          {/* Conditional Rendering: Expand only if clicked */}
          {expandedIndex === index && (
            <div className="mt-2">
              <div className="grid grid-cols-2 gap-4 mt-2">
                {/* School */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">School</label>
                  <input
                    type="text"
                    className="border p-2 rounded"
                    value={education.school}
                    onChange={(e) =>
                      handleEducationChange(index, "school", e.target.value)
                    }
                  />
                </div>

                {/* Degree */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">Degree</label>
                  <input
                    type="text"
                    className="border p-2 rounded"
                    value={education.degree}
                    onChange={(e) =>
                      handleEducationChange(index, "degree", e.target.value)
                    }
                  />
                </div>

                {/* Start Date */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">Start Date</label>
                  <input
                    type="month"
                    className="border p-2 rounded"
                    value={education.startDate}
                    onChange={(e) =>
                      handleEducationChange(index, "startDate", e.target.value)
                    }
                  />
                </div>

                {/* End Date */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">End Date</label>
                  <input
                    type="month"
                    className="border p-2 rounded"
                    value={education.endDate}
                    onChange={(e) =>
                      handleEducationChange(index, "endDate", e.target.value)
                    }
                  />
                </div>

                {/* City */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">City</label>
                  <input
                    type="text"
                    className="border p-2 rounded"
                    value={education.city}
                    onChange={(e) =>
                      handleEducationChange(index, "city", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mt-3">
                <label className="text-sm font-semibold">Description</label>
                <textarea
                  className="border p-2 rounded w-full h-24"
                  value={education.description}
                  onChange={(e) =>
                    handleEducationChange(index, "description", e.target.value)
                  }
                />
              </div>

              {/* Remove Education Button */}
              <button
                className="text-red-500 mt-3 underline font-bold"
                onClick={() => removeEducation(index)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Add More Education Button */}
      {education.length > 0 && (
        <button
          className="text-blue-500 mt-3 underline flex items-center font-bold"
          onClick={addEducation}
        >
          + Add one more education
        </button>
      )}
    </main>
  );
};

export default Education;
