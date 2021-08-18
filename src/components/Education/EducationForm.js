import SubmitButton from '../Buttons/SubmitButton';
import DeleteButton from '../Buttons/DeleteButton';
import { useState, useContext, useRef } from 'react';
import EducationDetails from './EducationDetails';
import FormDataContext from '../../store/form-data-context';
import { v4 as uuidv4 } from 'uuid';

function EducationForm(props) {
  const dataCtx = useContext(FormDataContext);
  const currentDataArray = dataCtx.education.filter(
    (data) => data.id === props.id
  );
  const [editMode, setEditMode] = useState(true);
  const [current, setCurrent] = useState(
    currentDataArray[0] || {
      id: props.id,
      isEditing: editMode,
      schoolName: '',
      studyTitle: '',
      fromDate: '',
      toDate: '',
    }
  );
  console.log(current);
  const detailsEditButton = () => {
    setEditMode((prev) => !prev);
    current.isEditing = true;
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setCurrent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  function validateForm() {
    const inputs = Object.values(current);
    if (inputs.some((input) => input === '')) {
      alert('Please fill all inputs');
      return true;
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) return;
    setEditMode((prev) => !prev);
    current.isEditing = false;
    if (!dataCtx.education.some((data) => data.id === props.id)) {
      dataCtx.addEducationData(current);
    } else {
      const dataIndex = dataCtx.education.findIndex(
        (data) => data.id === props.id
      );
      dataCtx.education[dataIndex] = current;
    }
  };
  const { id, onDelete } = props;
  if (!current.isEditing) {
    return (
      <EducationDetails
        key={uuidv4()}
        schoolName={current.schoolName}
        studyTitle={current.studyTitle}
        fromDate={current.fromDate}
        toDate={current.toDate}
        onEdit={detailsEditButton}
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
          value={current.schoolName}
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
          value={current.studyTitle}
          onChange={changeHandler}
        />
        <h3>Date of Study</h3>
        <label htmlFor="from">From :</label>
        <label htmlFor="to">To :</label>
        <input
          name="fromDate"
          value={current.fromDate}
          onChange={changeHandler}
          type="date"
        />
        <input
          name="toDate"
          value={current.toDate}
          onChange={changeHandler}
          type="date"
        />
      </form>
      {[
        <SubmitButton key={uuidv4()} submitForm={submitHandler}></SubmitButton>,
        <DeleteButton
          key={uuidv4()}
          clicked={() => onDelete('education', id)}
        />,
      ]}
    </div>
  );
}

export default EducationForm;
