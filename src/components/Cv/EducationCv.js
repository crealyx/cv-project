function EducationCv(props) {
  return (
    <div className="education-cv">
      <div className="school-cv">
        <h2>School Name: {props.educationData.schoolName}</h2>
        <h2>Study Title: {props.educationData.studyTitle}</h2>
      </div>
      <h2>
        {props.educationData.fromDate} --- {props.educationData.toDate}
      </h2>
    </div>
  );
}
export default EducationCv;
