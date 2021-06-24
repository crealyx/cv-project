function EducationCv(props) {
  console.log(props.educationData);
  return (
    <div className="education-cv">
      <div className="school-cv">
        <h2>School Name: {props.educationData.schoolName}</h2>
        <h2>Study Title: {'schoolTitle'}</h2>
      </div>
      <h2>
        {'fromDate'}-{'toDate'}
      </h2>
    </div>
  );
}
export default EducationCv;
