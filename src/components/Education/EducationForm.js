import SubmitButton from '../Buttons/SubmitButton';
import DeleteButton from '../Buttons/DeleteButton';
import { useState } from 'react';
import EducationDetails from './EducationDetails';
function EducationForm(props) {
  const [educationData, setEducationData] = useState({
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
    setEditMode((previousMode) => !previousMode);
  };
  const { schoolName, studyTitle, fromDate, toDate } = educationData;
  const { id, onDelete } = props;
  const [editMode, setEditMode] = useState(false);
  if (editMode) {
    return (
      <EducationDetails
        schoolName={schoolName}
        studyTitle={studyTitle}
        fromDate={fromDate}
        toDate={toDate}
        onEdit={() => setEditMode((previousMode) => !previousMode)}
        onDelete={() => onDelete('education', id)}
      ></EducationDetails>
    );
  }
  return (
    <div className="education-cont">
      <h1>Education Form</h1>
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
      {[
        <SubmitButton submitForm={submitHandler}></SubmitButton>,
        <DeleteButton clicked={() => onDelete('education', id)} />,
      ]}
    </div>
  );
}

export default EducationForm;
