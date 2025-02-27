import React, { useState } from "react";
import ProfilePhotoUpload from "./ProfilePhotoUpload";
// import ProfessionalSummary from "./ProfessionalSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import EmploymentHistory from "./EmploymentHistory";
import Education from "./Education";
import { Reorder } from "framer-motion";
import DragAndDropList from "./DragAndDropList";
import SkillsSection from "./SkillsSection";

const availableSections = [
  "Custom Section",
  "Courses",
  "Extra-curricular Activities",
  "Internships",
  "Hobbies",
  "Languages",
  "References",
];

const ResumeForm = ({ formData, setFormData }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [addedSections, setAddedSections] = useState([]);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const handleImageUpload = (imageData) => {
    setFormData({ ...formData, photo: imageData });
  };

  return (
    <div className="grid gap-6 w-full">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Personal details</h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="block text-black-600 mb-1">Job Title</label>
            <input
              type="text"
              className="border p-2 w-full rounded bg-gray-100"
              value={formData.jobTitle}
              onChange={(e) =>
                setFormData({ ...formData, jobTitle: e.target.value })
              }
            />
          </div>

          {/* Profile Photo Upload */}
          <ProfilePhotoUpload
            onImageUpload={handleImageUpload}
            formData={formData}
          />

          {/* <div className="relative w-full">
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 text-lg border-2 rounded-md outline-blue-700 bg-transparent peer"
              placeholder=" "
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <label
              htmlFor="name"
              className={`absolute left-3 top-0  -translate-y-1/2 bg-white px-1 text-blue-700 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-700`}
            >
              First Name
            </label>
          </div> */}
          <div className="flex flex-col">
            <label className="block text-black-600 mb-1">First Name</label>
            <input
              type="text"
              className="border p-2 w-full rounded bg-gray-100"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-black-600 mb-1">Last Name</label>
            <input
              type="text"
              className="border p-2 w-full rounded bg-gray-100"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-black-600 mb-1">Email</label>
            <input
              type="email"
              className="border p-2 w-full rounded bg-gray-100"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-black-600 mb-1">Phone</label>
            <input
              type="tel"
              className="border p-2 w-full rounded bg-gray-100"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                if (value.length <= 10) {
                  setFormData({ ...formData, phone: value });
                }
              }}
              maxLength={10}
              pattern="[0-9]{10}"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-black-600 mb-1">City</label>
            <input
              type="text"
              className="border p-2 w-full rounded bg-gray-100"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-black-600 mb-1">Country</label>
            <input
              type="text"
              className="border p-2 w-full rounded bg-gray-100"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            />
          </div>
        </div>
        {showMoreDetails && (
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Address */}
              <div className="flex flex-col">
                <label className="block text-black-600 mb-1">Address</label>
                <input
                  type="text"
                  className="border p-2 w-full rounded bg-gray-100"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>

              {/* Postal Code */}
              <div className="flex flex-col">
                <label className="block text-black-600 mb-1">Postal Code</label>
                <input
                  type="text"
                  className="border p-2 w-full rounded bg-gray-100"
                  value={formData.postCode}
                  onChange={(e) =>
                    setFormData({ ...formData, postCode: e.target.value })
                  }
                />
              </div>

              {/* Driving License */}
              <div className="flex flex-col">
                <label className="block text-black-600 mb-1">
                  Driving License
                  <span className="ml-1 relative group">
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="text-gray-500 cursor-pointer hover:text-blue-600"
                    />

                    {/* Tooltip */}
                    <span className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-64 bg-black text-white text-sm rounded-md p-2 shadow-lg">
                      Include this section if your profession requires a certain
                      type of license. If not, leave it blank.
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  className="border p-2 w-full rounded bg-gray-100"
                  value={formData.license}
                  onChange={(e) =>
                    setFormData({ ...formData, license: e.target.value })
                  }
                />
              </div>

              {/* Nationality */}
              <div className="flex flex-col">
                <label className="block text-black-600 mb-1">
                  Nationality
                  <span className="ml-1 relative group">
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="text-gray-500 cursor-pointer hover:text-blue-600"
                    />

                    {/* Tooltip */}
                    <span className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-64 bg-black text-white text-sm rounded-md p-2 shadow-lg">
                      Include your nationality only if it is relevant to your
                      position. In most cases, leave this blank.
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  className="border p-2 w-full rounded bg-gray-100"
                  value={formData.nationality}
                  onChange={(e) =>
                    setFormData({ ...formData, nationality: e.target.value })
                  }
                />
              </div>

              {/* Place Of Birth */}
              <div className="flex flex-col">
                <label className="block text-black-600 mb-1">
                  Place Of Birth
                </label>
                <input
                  type="text"
                  className="border p-2 w-full rounded bg-gray-100"
                  value={formData.placeOfBirth}
                  onChange={(e) =>
                    setFormData({ ...formData, placeOfBirth: e.target.value })
                  }
                />
              </div>

              {/* Date Of Birth */}
              <div className="flex flex-col">
                <label className="block text-black-600 mb-1">
                  Date Of Birth
                  <span className="ml-1 relative group">
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="text-gray-500 cursor-pointer hover:text-blue-600"
                    />

                    {/* Tooltip */}
                    <span className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-64 bg-black text-white text-sm rounded-md p-2 shadow-lg">
                      Add your date of birth only if it is a relevant
                      requirement for your position. In most cases, leave this
                      blank.
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  className="border p-2 w-full rounded bg-gray-100"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    setFormData({ ...formData, dateOfBirth: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        )}

        {/* Toggle Button for More Details */}
        <button
          className="text-blue-500 mt-3 underline flex items-center font-bold"
          onClick={() => setShowMoreDetails(!showMoreDetails)}
        >
          {showMoreDetails ? "Hide additional details ⌃" : "Add more detail ⌄"}
        </button>

        {/* Extra Details Section */}
      </div>

      <DragAndDropList formData={formData} setFormData={setFormData} />
      {/* <EmploymentHistory formData={formData} setFormData={setFormData} /> */}

      {/* Add Section Feature */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Add Section</h3>
        <div className="grid grid-cols-3 gap-2">
          {availableSections.map((section) => (
            <button
              key={section}
              onClick={() => handleAddSection(section)}
              className="flex items-center bg-blue-500 text-white px-3 py-2 rounded shadow hover:bg-blue-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Display Added Sections */}
      {addedSections.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Added Sections</h3>
          <div className="space-y-4">
            {addedSections.map((section) => (
              <div
                key={section}
                className="flex justify-between items-center bg-gray-200 p-3 rounded"
              >
                <span className="text-gray-800 font-semibold">{section}</span>
                <button
                  onClick={() => handleRemoveSection(section)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeForm;
