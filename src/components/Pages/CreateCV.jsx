import React, { useEffect, useRef, useState } from "react";
import { saveAs } from "file-saver";
import ResumeForm from "../Forms/ResumeForm";
import ResumePreview from "../ResumePreview/ResumePreview";
import Template4Pdf from "../ResumePDF/Template4Pdf";
import Template4Docx from "../ResumeDocx/Template4Docx";
import { PDFDownloadLink } from "@react-pdf/renderer";

const CreateCV = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false); // State for export menu
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("resumeData");
    return savedData
      ? JSON.parse(savedData)
      : {
          jobTitle: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          city: "",
          address: "",
          postCode: "",
          license: "",
          nationality: "",
          placeOfBirth: "",
          dateOfBirth: "",
          summary: "",
          employmentHistory: [],
          education: [],
          sections: ["education", "employment", "skills"],
          skills: [],
          photo: null,
        };
  });

  // Save data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(formData));
  }, [formData]);

  // 🔹 Function to Export as TXT
  const handleExportTxt = () => {
    const textContent = JSON.stringify(formData, null, 2);
    const blob = new Blob([textContent], { type: "text/plain" });
    saveAs(blob, "resume.txt");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      {/* {!selectedTemplate ? (
        <ResumeTemplates setSelectedTemplate={setSelectedTemplate} />
      ) : ( */}
      <div className="flex flex-col lg:flex-row h-screen bg-gray-600 w-full">
        {/* Form Section - Scrollable */}
        <div
          className={`w-full md:w-2/3 lg:w-1/2 p-6 bg-white overflow-y-auto h-screen ${
            showPreview ? "hidden lg:block" : "block"
          }`}
        >
          <ResumeForm formData={formData} setFormData={setFormData} />

          {/* Button to Show Preview (Only Visible Below lg) */}
          <button
            className="mt-4 block lg:hidden bg-blue-500 text-white px-4 py-2 rounded w-full"
            onClick={() => setShowPreview(true)}
          >
            Show Preview
          </button>
        </div>

        {/* Resume Preview Section - Sticky on Desktop, Fixed on Mobile */}
        <div
          className={`
              ${
                showPreview
                  ? "inset-0 w-full h-full z-20 bg-gray-600"
                  : "hidden"
              } 
              lg:relative lg:block lg:w-1/2 lg:sticky lg:top-0 lg:h-screen
            `}
        >
          {/* Mobile Header for Closing Preview */}
          {showPreview && (
            <div className="flex justify-between items-center p-4 bg-gray-700 text-white lg:hidden">
              <h2 className="text-lg">Resume Preview</h2>
              <button
                className="bg-red-500 px-3 py-1 rounded"
                onClick={() => setShowPreview(false)}
              >
                Close
              </button>
            </div>
          )}

          {/* 🔹 Buttons Section */}
          <div className="p-4 flex justify-end gap-2">
            {/* Download PDF Button */}
            <PDFDownloadLink
              document={<Template4Pdf formData={formData} />}
              fileName="resume.pdf"
            >
              {({ loading }) => (
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  {loading ? "Generating PDF..." : "Download PDF"}
                </button>
              )}
            </PDFDownloadLink>

            {/* Export Dropdown Button */}
            <div className="relative">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setShowExportOptions(!showExportOptions)}
              >
                ...
              </button>

              {showExportOptions && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
                  <Template4Docx formData={formData} />
                  <button
                    className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                    onClick={handleExportTxt}
                  >
                    Export to TXT
                  </button>
                </div>
              )}
            </div>
          </div>

          <ResumePreview
            formData={formData}
            selectedTemplate={selectedTemplate}
          />
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default CreateCV;
