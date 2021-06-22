import SubmitButton from '../Buttons/SubmitButton';
import { useState } from 'react';
function EducationForm(props) {
  const [educationData, setEducationData] = useState({
    type: 'education',
    schoolName: '',
    studyTitle: '',
    fromDate: '',
    toDate: '',
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setEducationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(educationData);
  };

  return (
    <div className="education-cont">
      <form action="submit" className="education-form">
        <label htmlFor="school-name" className="school-name">
          School Name
        </label>
        <input
          type="text"
          name="schoolName"
          placeholder="Enter School Name"
          className="school-name-input"
          value={educationData.schoolName}
          onChange={changeHandler}
        />
        <label htmlFor="position-title" className="study-title">
          Study Title
        </label>
        <input
          type="text"
          name="studyTitle"
          placeholder="Enter Study Title"
          className="study-title-input"
          value={educationData.studyTitle}
          onChange={changeHandler}
        />
        <h3>Date of Study</h3>
        <label htmlFor="from">From :</label>
        <label htmlFor="to">To :</label>
        <input
          name="fromDate"
          value={educationData.fromDate}
          onChange={changeHandler}
          type="date"
        />
        <input
          name="toDate"
          value={educationData.toDate}
          onChange={changeHandler}
          type="date"
        />
      </form>
      <SubmitButton submitForm={submitHandler}></SubmitButton>
    </div>
  );
}

export default EducationForm;
