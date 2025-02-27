import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProfessionalSummary = () => {
    const [summary, setSummary] = useState("");
    const minChars = 400;

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            {/* Title & Description */}
            <h2 className="text-xl font-bold mb-1">Professional Summary</h2>
            <p className="text-gray-600 text-sm mb-3">
                Write 2-4 short, energetic sentences about how great you are. Mention the role and what you did.
                What were the big achievements? Describe your motivation and list your skills.
            </p>

            {/* Rich Text Editor */}
            <div className="rounded-lg bg-gray-100">
                <ReactQuill
                    value={summary}
                    onChange={setSummary}
                    className="bg-white rounded-md"
                    theme="snow"
                />
            </div>

            {/* Character Counter & Emoji Feedback */}
            <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span className="">
                    Recruiter tip: write <b>400-600</b> characters to increase interview chances
                </span>
                <span className="flex items-center gap-1">
                    {summary.replace(/<[^>]+>/g, "").length} / {minChars}+
                    {summary.replace(/<[^>]+>/g, "").length >= minChars ? " 😊" : " 😡"}
                </span>
            </div>
        </div>
    );
};

export default ProfessionalSummary;
