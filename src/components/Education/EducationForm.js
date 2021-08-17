import SubmitButton from '../Buttons/SubmitButton';
import DeleteButton from '../Buttons/DeleteButton';
import { useState, useContext, useEffect } from 'react';
import EducationDetails from './EducationDetails';
import FormDataContext from '../../store/form-data-context';
import { v4 as uuidv4 } from 'uuid';

function EducationForm(props) {
  const dataCtx = useContext(FormDataContext);
  const currentDataArray = dataCtx.education.filter(
    (data) => data.id === props.id
  );
  const [current, setCurrent] = useState(
    currentDataArray[0] || {
      id: props.id,
      schoolName: '',
      studyTitle: '',
      fromDate: '',
      toDate: '',
    }
  );
  const [editMode, setEditMode] = useState(true);
  useEffect(() => {
    const storedEditMode = localStorage.getItem('isEditMode');
    if (storedEditMode === '0') {
      setEditMode(false);
    }
    if (storedEditMode === '1') {
      setEditMode(true);
    }
  }, []);
  const detailsEditButton = () => {
    setEditMode(true);
    localStorage.setItem('isEditMode', '1');
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setCurrent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setEditMode(false);
    localStorage.setItem('isEditMode', '0');
    if (!dataCtx.education.some((data) => data.id === props.id)) {
      dataCtx.education.push(current);
    } else {
      const dataIndex = dataCtx.education.findIndex(
        (data) => data.id === props.id
      );
      dataCtx.education[dataIndex] = current;
    }
  };
  const { id, onDelete } = props;

  if (!editMode) {
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
          value={current.schoolName}
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
