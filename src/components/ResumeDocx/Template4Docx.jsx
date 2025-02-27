import { saveAs } from "file-saver";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableCell,
  TableRow,
  WidthType,
  ShadingType,
} from "docx";

const Template4Docx = ({ formData }) => {
  const handleExportDocx = async () => {
    // Ensure default values to prevent crashes
    const firstName = formData.firstName || "First Name";
    const lastName = formData.lastName || "Last Name";
    const jobTitle = formData.jobTitle || "Job Title";
    const summary = formData.summary || "No summary provided.";
    const city = formData.city || "City";
    const country = formData.country || "Country";
    const phone = formData.phone || "Phone";
    const email = formData.email || "Email";
    const skills =
      formData.skills && formData.skills.length
        ? formData.skills
        : ["No skills listed"];

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Table for Two-Column Layout
            new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              rows: [
                new TableRow({
                  children: [
                    // Left Section (Main Content, 70%)
                    new TableCell({
                      width: { size: 70, type: WidthType.PERCENTAGE },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: `${firstName} ${lastName}`,
                              bold: true,
                              size: 48, // Big Title
                            }),
                          ],
                        }),
                        new Paragraph({
                          text: jobTitle,
                          italics: true,
                          size: 24,
                        }),
                        new Paragraph({ text: " " }), // Space
                        new Paragraph({
                          text: "Profile",
                          bold: true,
                          size: 26,
                        }),
                        new Paragraph({
                          text: summary,
                          size: 22,
                        }),
                      ],
                    }),

                    // Right Section (Sidebar with Blue Background, 30%)
                    new TableCell({
                      width: { size: 30, type: WidthType.PERCENTAGE },
                      shading: {
                        fill: "1E3A8A", // Dark blue background
                        type: ShadingType.SOLID,
                        color: "FFFFFF",
                      },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Details",
                              bold: true,
                              color: "FFFFFF", // White text
                              size: 26,
                            }),
                          ],
                        }),
                        new Paragraph({
                          text: `${city}, ${country}`,
                          color: "FFFFFF",
                          size: 22,
                        }),
                        new Paragraph({
                          text: phone,
                          color: "FFFFFF",
                          size: 22,
                        }),
                        new Paragraph({
                          text: email,
                          color: "FFFFFF",
                          size: 22,
                        }),
                        new Paragraph({ text: " " }), // Space
                        new Paragraph({
                          text: "Skills",
                          bold: true,
                          color: "FFFFFF",
                          size: 26,
                        }),
                        ...skills.map(
                          (skill) =>
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: skill,
                                  color: "FFFFFF",
                                  size: 22,
                                }),
                              ],
                            })
                        ),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        },
      ],
    });

    // Generate and save the document
    const blob = await Packer.toBlob(doc);
    saveAs(blob, "Resume.docx");
  };

  return (
    <button
      className="block px-4 py-2 w-full text-left hover:bg-gray-100"
      onClick={handleExportDocx}
    >
      Export to DOCX
    </button>
  );
};

export default Template4Docx;
