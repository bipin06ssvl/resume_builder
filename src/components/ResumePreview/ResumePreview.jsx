import React from "react";
import Template4 from "../Templates/Template4";

const ResumePreview = ({ formData, selectedTemplate }) => {
  return (
    <div className="text-base leading-relaxed break-words">
      {selectedTemplate === 1 && <Template4 formData={formData} />}
    </div>
  );
};

export default ResumePreview;
