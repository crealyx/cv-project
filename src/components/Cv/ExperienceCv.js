function ExperienceCv(props) {
  return (
    <div className="experience-cv-container">
      <div className="job-info">
        <div className="company-cont">
          <h2>Company Name:</h2>
          <h2>{props.experienceData.companyName}</h2>
        </div>
        <div className="position-cont">
          <h2>Position Title:</h2>
          <h2>{props.experienceData.positionTitle}</h2>
        </div>
      </div>
      <div className="experience-cv-date">
        <h2> {props.experienceData.fromDate}</h2>
        <h2>-</h2>
        <h2>{props.experienceData.toDate}</h2>
      </div>
      <div className="main-task-cv-container">
        <h2 className="main-task-cv">Main Tasks</h2>
        <p>{props.experienceData.mainTasks}</p>
      </div>
      <div className="test"></div>
    </div>
  );
}

export default ExperienceCv;
