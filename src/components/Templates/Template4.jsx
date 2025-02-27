import React from "react";

const Template4 = ({ formData }) => {
  // Get sections order from formData
  const sectionsOrder = formData.sectionsOrder || [
    "education",
    "employment",
    "skills",
  ];

  // Section mapping
  const sections = {
    employment: (
      <section className="mt-6">
        <h2 className="text-xl font-bold mb-2">Employment History</h2>
        {formData.employmentHistory?.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">
              {[job.jobTitle, job.employer, job.city]
                .filter(Boolean)
                .join(", ")}
            </h3>
            <p className="text-gray-500 text-sm">
              {[job.startDate, job.endDate].filter(Boolean).join(" - ")}
            </p>
          </div>
        ))}
      </section>
    ),
    education: (
      <section className="mt-6">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        {formData.education?.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">
              {[edu.degree, edu.school, edu.city].filter(Boolean).join(", ")}
            </h3>
            <p className="text-gray-500 text-sm">
              {[edu.startDate, edu.endDate].filter(Boolean).join(" - ")}
            </p>
          </div>
        ))}
      </section>
    ),
  };

  return (
    <div className="w-[768px] h-[768px] max-lg:w-[500px] mx-auto shadow-lg border my-10 flex">
      <div className="w-2/3 bg-white p-8">
        <div className="flex items-center gap-2">
          {/* Profile Photo */}
          {formData.photo && (
            <img
              src={formData.photo}
              alt="Profile"
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
          )}

          {/* Name & Title */}
          <div>
            <h1 className="text-4xl font-bold">
              {formData.firstName} {formData.lastName}
            </h1>
            <p className="text-gray-500 uppercase text-sm font-semibold">
              {formData.jobTitle}
            </p>
          </div>
        </div>

        <section className="mt-6">
          <h2 className="text-xl font-bold mb-2">Profile</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {formData.summary}
          </p>
        </section>

        {/* Render Sections Based on Order */}
        {sectionsOrder.map((section) => sections[section])}

        {/* Extra-Curricular Activities */}
        <section className="mt-6">
          <h2 className="text-xl font-bold mb-2">
            Extra-curricular activities
          </h2>
          <p className="text-gray-700 text-sm">Demo Project, Junior, Surat</p>
        </section>

        {/* Courses */}
        <section className="mt-6 break-before-page">
          <h2 className="text-xl font-bold mb-2">Courses</h2>
          <p className="text-gray-700 text-sm">React JS, SoftEdu</p>
        </section>

        {/* References */}
        <section className="mt-6 break-before-page">
          <h2 className="text-xl font-bold mb-2">References</h2>
          <p className="text-gray-700 text-sm">
            Sumit Patel, Kapu Brother Tech
          </p>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/3 bg-blue-900 text-white p-6">
        {/* Contact Details - Show only if at least one value is present */}
        {(formData?.city ||
          formData?.country ||
          formData?.phone ||
          formData?.email) && (
          <section>
            <h2 className="text-lg font-bold border-b pb-1 mb-2">Details</h2>
            {/* Show City & Country in a single line, handling cases where one might be missing */}
            {(formData?.address ||
              formData?.postCode ||
              formData?.city ||
              formData?.country) && (
              <p className="text-sm">
                {[
                  formData.address,
                  formData.city,
                  formData.postCode,
                  formData.country,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </p>
            )}
            {formData?.phone && <p className="text-sm">{formData.phone}</p>}
            {formData?.email && <p className="text-sm">{formData.email}</p>}
          </section>
        )}

        {formData?.nationality && (
          <section className="mt-6">
            <h2 className="text-lg font-bold border-b pb-1 mb-2">
              Nationality
            </h2>
            {formData?.nationality && (
              <p className="text-sm">{formData.nationality}</p>
            )}
          </section>
        )}

        {formData?.license && (
          <section className="mt-6">
            <h2 className="text-lg font-bold border-b pb-1 mb-2">
              Driving License
            </h2>
            {formData?.license && <p className="text-sm">{formData.license}</p>}
          </section>
        )}

        {/* Skills with Experience Levels */}
        {formData.skills && formData.skills.length > 0 && (
          <section className="mt-6">
            <h2 className="text-lg font-bold border-b pb-1 mb-3">Skills</h2>
            <div className="space-y-1">
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  {/* Skill Name */}
                  <span
                    className="text-white text-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
                    style={{ width: "120px" }} // Adjust width as needed
                  >
                    {skill.name}
                  </span>

                  {/* Spacing between name & bar */}
                  <div className="mx-2" />

                  {/* Progress Bar */}
                  <div className="flex-1 bg-gray-600 h-1 rounded overflow-hidden">
                    <div
                      className="bg-white h-1 rounded"
                      style={{
                        width:
                          skill.level === "Beginner"
                            ? "25%"
                            : skill.level === "Intermediate"
                            ? "50%"
                            : skill.level === "Advanced"
                            ? "75%"
                            : "100%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hobbies */}
        <section className="mt-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Hobbies</h2>
          <p className="text-sm">Reading, Traveling, Learning</p>
        </section>

        {/* Languages */}
        <section className="mt-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Languages</h2>
          <p className="text-sm">English, Hindi, Gujarati</p>
        </section>
      </div>
    </div>
  );
};

export default Template4;
