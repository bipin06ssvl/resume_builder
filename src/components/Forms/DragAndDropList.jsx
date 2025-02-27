import { useEffect, useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import EmploymentHistory from "./EmploymentHistory"; // Import Employment Component
import Education from "./Education"; // Import Education Component
import ReorderIcon from "./Icon";
import SkillsSection from "./SkillsSection";

const DragDropLists = ({ formData, setFormData }) => {
  // Load sectionsOrder from localStorage or fallback to formData
  const initialOrder = JSON.parse(localStorage.getItem("sectionsOrder")) ||
    formData.sections || ["education", "employment", "skills"];

  const [sectionsOrder, setSectionsOrder] = useState(initialOrder);

  // Save to localStorage whenever sectionsOrder changes
  useEffect(() => {
    localStorage.setItem("sectionsOrder", JSON.stringify(sectionsOrder));
  }, [sectionsOrder]);
  // Function to handle drag & drop reorder
  const handleReorder = (newOrder) => {
    setSectionsOrder(newOrder);
    setFormData({ ...formData, sectionsOrder: newOrder });
  };

  // Section mapping
  const sections = {
    employment: (
      <EmploymentHistory formData={formData} setFormData={setFormData} />
    ),
    education: <Education formData={formData} setFormData={setFormData} />,
    skills: <SkillsSection formData={formData} setFormData={setFormData} />,
  };

  return (
    <main className="">
      <Reorder.Group
        axis="y"
        values={sectionsOrder}
        onReorder={handleReorder}
        className="space-y-6"
      >
        {sectionsOrder.map((section) => (
          <Reorder.Item
            key={section}
            value={section}
            className="p-6 bg-white shadow-lg rounded-lg"
          >
            {/* Render the correct component */}
            {sections[section]}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </main>
  );
};

export default DragDropLists;
