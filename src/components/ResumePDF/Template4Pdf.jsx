import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles (like CSS but for PDF)
const styles = StyleSheet.create({
  page: { fontSize: 12 },
  section: { marginTop: 16, paddingBottom: 4 },
  mainHeading: { fontSize: 24, fontWeight: "bold", marginBottom: 2 },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    borderBottom: "1px solid white",
    paddingBottom: 4,
  },
  subHeading: { fontSize: 14, fontWeight: "bold", marginBottom: 4 },
  text: { fontSize: 10, marginBottom: 4 },
  subText: { fontSize: 10, color: "gray", marginBottom: 4 },
  list: { fontSize: 10, marginBottom: 4, marginLeft: 10 },
  sidebar: {
    width: "35%",
    backgroundColor: "#003366",
    color: "white",
    padding: 15,
  },
  main: { width: "65%", padding: 10 },
  container: { height: "100%", flexDirection: "row", border: "1px solid #ddd" },
});

// Resume PDF Component
const Template4Pdf = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Left Side - Main Content */}
        <View style={styles.main}>
          {/* Name & Title */}
          <Text style={styles.mainHeading}>
            {formData.firstName} {formData.lastName}
          </Text>
          <Text style={styles.subText}>{formData.jobTitle}</Text>

          {/* Profile Section */}
          <View style={styles.section}>
            <Text style={styles.subHeading}>Profile</Text>
            <Text style={styles.text}>{formData.summary}</Text>
          </View>

          {/* Employment History */}
          {formData.employmentHistory &&
            formData.employmentHistory.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.subHeading}>Employment History</Text>
                {formData.employmentHistory.map((job, index) => (
                  <View key={index} style={{ marginBottom: 4 }}>
                    <Text style={styles.text}>
                      {[job.jobTitle, job.employer, job.city]
                        .filter(Boolean)
                        .join(", ")}
                    </Text>
                    <Text style={styles.subText}>
                      {[job.startDate, job.endDate].filter(Boolean).join(" - ")}
                    </Text>
                    {job.description && (
                      <Text style={styles.list}>• {job.description}</Text>
                    )}
                  </View>
                ))}
              </View>
            )}

          {/* Education */}
          {formData.education && formData.education.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.subHeading}>Education</Text>
              {formData.education.map((edu, index) => (
                <View key={index} style={{ marginBottom: 4 }}>
                  <Text style={styles.text}>
                    {[edu.degree, edu.school, edu.city]
                      .filter(Boolean)
                      .join(", ")}
                  </Text>
                  <Text style={styles.text}>
                    {[edu.startDate, edu.endDate].filter(Boolean).join(" - ")}
                  </Text>
                  {edu.description && (
                    <Text style={styles.list}>• {edu.description}</Text>
                  )}
                </View>
              ))}
            </View>
          )}

          {/* Extra-Curricular Activities */}
          <View style={styles.section}>
            <Text style={styles.subHeading}>Extra-curricular activities</Text>
            <Text style={styles.text}>Demo Project, Junior, Surat</Text>
          </View>

          {/* Courses */}
          <View style={styles.section}>
            <Text style={styles.subHeading}>Courses</Text>
            <Text style={styles.text}>React JS, SoftEdu</Text>
          </View>

          {/* References */}
          <View style={styles.section}>
            <Text style={styles.subHeading}>References</Text>
            <Text style={styles.text}>Sumit Patel, Kapu Brother Tech</Text>
          </View>
        </View>

        {/* Right Sidebar */}
        <View style={styles.sidebar}>
          {/* Contact Details - Show only if at least one value is present */}
          {(formData?.city ||
            formData?.country ||
            formData?.phone ||
            formData?.email) && (
            <View style={styles.section}>
              <Text style={styles.heading}>Details</Text>
              {(formData?.city || formData?.country) && (
                <Text style={styles.text}>
                  {[formData.city, formData.country].filter(Boolean).join(", ")}
                </Text>
              )}
              {formData?.phone && (
                <Text style={styles.text}>{formData.phone}</Text>
              )}
              {formData?.email && (
                <Text style={styles.text}>{formData.email}</Text>
              )}
            </View>
          )}

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.heading}>Skills</Text>
            <Text style={styles.list}>• React</Text>
            <Text style={styles.list}>• HTML & CSS</Text>
            <Text style={styles.list}>• C++</Text>
            <Text style={styles.list}>• SQL</Text>
            <Text style={styles.list}>• JavaScript</Text>
          </View>

          {/* Hobbies */}
          <View style={styles.section}>
            <Text style={styles.heading}>Hobbies</Text>
            <Text style={styles.text}>Reading, Traveling, Learning</Text>
          </View>

          {/* Languages */}
          <View style={styles.section}>
            <Text style={styles.heading}>Languages</Text>
            <Text style={styles.text}>English, Hindi, Gujarati</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Template4Pdf;
