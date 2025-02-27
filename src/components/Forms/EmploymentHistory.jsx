import React, { useState } from "react";

const EmploymentHistory = ({ formData, setFormData }) => {
  const employmentHistory = formData.employmentHistory || [];
  const [expandedIndex, setExpandedIndex] = useState(null); // Track open section

  // Function to add a new employment entry
  const addEmployment = () => {
    const newEmployment = {
      jobTitle: "",
      employer: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    };

    setFormData({
      ...formData,
      employmentHistory: [...employmentHistory, newEmployment],
    });

    setExpandedIndex(employmentHistory.length); // Expand the newly added section
  };

  // Function to update a specific employment entry
  const handleEmploymentChange = (index, field, value) => {
    const updatedEmployment = [...employmentHistory];
    updatedEmployment[index][field] = value;

    setFormData({
      ...formData,
      employmentHistory: updatedEmployment,
    });
  };

  // Function to remove an employment entry
  const removeEmployment = (index) => {
    const updatedEmployment = employmentHistory.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      employmentHistory: updatedEmployment,
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

  // Function to swap employment entries
  const swapEmployment = (index1, index2) => {
    const updatedEmployment = [...employmentHistory];
    [updatedEmployment[index1], updatedEmployment[index2]] = [
      updatedEmployment[index2],
      updatedEmployment[index1],
    ];
    setFormData({ ...formData, employmentHistory: updatedEmployment });
  };

  return (
    <main className="">
      <h2 className="text-2xl font-bold mb-2">Employment History</h2>
      <p className="text-sm text-gray-500 mb-4">
        Show your relevant experience (last 10 years). Use bullet points to note
        your achievements, if possible – use numbers/facts (Achieved X, measured
        by Y, by doing Z).
      </p>

      {/* Show "Add Employment" button initially */}
      {employmentHistory.length === 0 && (
        <button
          className="bg-blue-100 text-blue-600 py-2 px-4 rounded w-full text-left font-semibold"
          onClick={addEmployment}
        >
          + Add employment
        </button>
      )}

      {/* Render Employment Entries */}
      {employmentHistory.map((employment, index) => (
        <div key={index} className="border rounded-lg p-4 mb-4 bg-gray-50">
          {/* Toggleable Title Section */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <h3 className="font-semibold text-lg">
              {employment.jobTitle || "Job Title"} at{" "}
              {employment.employer || "Employer"}
            </h3>
            <span>{expandedIndex === index ? "▲" : "▼"}</span>
          </div>

          {/* Conditional Rendering: Expand only if clicked */}
          {expandedIndex === index && (
            <div className="mt-2">
              <div className="grid grid-cols-2 gap-4 mt-2">
                {/* Job Title */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">Job Title</label>
                  <input
                    type="text"
                    className="border p-2 rounded"
                    value={employment.jobTitle}
                    onChange={(e) =>
                      handleEmploymentChange(index, "jobTitle", e.target.value)
                    }
                  />
                </div>

                {/* Employer */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">Employer</label>
                  <input
                    type="text"
                    className="border p-2 rounded"
                    value={employment.employer}
                    onChange={(e) =>
                      handleEmploymentChange(index, "employer", e.target.value)
                    }
                  />
                </div>

                {/* Start Date */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">Start Date</label>
                  <input
                    type="month"
                    className="border p-2 rounded"
                    value={employment.startDate}
                    onChange={(e) =>
                      handleEmploymentChange(index, "startDate", e.target.value)
                    }
                  />
                </div>

                {/* End Date */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">End Date</label>
                  <input
                    type="month"
                    className="border p-2 rounded"
                    value={employment.endDate}
                    onChange={(e) =>
                      handleEmploymentChange(index, "endDate", e.target.value)
                    }
                  />
                </div>

                {/* City */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">City</label>
                  <input
                    type="text"
                    className="border p-2 rounded"
                    value={employment.city}
                    onChange={(e) =>
                      handleEmploymentChange(index, "city", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mt-3">
                <label className="text-sm font-semibold">Description</label>
                <textarea
                  className="border p-2 rounded w-full h-24"
                  value={employment.description}
                  onChange={(e) =>
                    handleEmploymentChange(index, "description", e.target.value)
                  }
                />
              </div>

              <div className="mt-3 flex gap-4">
                {index > 0 && (
                  <button
                    className="text-blue-500 font-bold"
                    onClick={() => swapEmployment(index, index - 1)}
                  >
                    ⬆ Move Up
                  </button>
                )}
                {index < employmentHistory.length - 1 && (
                  <button
                    className="text-blue-500 font-bold"
                    onClick={() => swapEmployment(index, index + 1)}
                  >
                    ⬇ Move Down
                  </button>
                )}

                {/* Remove Employment Button */}
                <button
                  className="text-red-500 font-bold"
                  onClick={() => removeEmployment(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add More Employment Button */}
      {employmentHistory.length > 0 && (
        <button
          className="text-blue-500 mt-3 underline flex items-center font-bold"
          onClick={addEmployment}
        >
          + Add one more employment
        </button>
      )}
    </main>
  );
};

export default EmploymentHistory;
