import SubmitButton from '../Buttons/SubmitButton';
import DeleteButton from '../Buttons/DeleteButton';
import ExperienceDetails from './ExperienceDetails';
import FormDataContext from '../../store/form-data-context';
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ExperienceForm(props) {
  const dataCtx = useContext(FormDataContext);
  const currentDataArray = dataCtx.experience.filter(
    (data) => data.id === props.id
  );
  const [editMode, setEditMode] = useState(true);
  const [current, setCurrent] = useState(
    currentDataArray[0] || {
      id: props.id,
      isEditing: editMode,
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      fromDate: '',
      toDate: '',
    }
  );

  const detailsEditHandler = () => {
    setEditMode((prev) => !prev);
    current.isEditing = true;
    // localStorage.setItem('isEditMode', '1');
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
    // localStorage.setItem('isEditMode', '0');
    if (!dataCtx.experience.some((data) => data.id === props.id)) {
      dataCtx.addExperienceData(current);
    } else {
      const dataIndex = dataCtx.experience.findIndex(
        (data) => data.id === props.id
      );
      dataCtx.experience[dataIndex] = current;
    }
  };
  const { id, onDelete } = props;
  if (!current.isEditing) {
    return (
      <ExperienceDetails
        key={uuidv4()}
        companyName={current.companyName}
        positionTitle={current.positionTitle}
        mainTasks={current.mainTasks}
        fromDate={current.fromDate}
        toDate={current.toDate}
        onEdit={detailsEditHandler}
        onDelete={() => onDelete('experience', id)}
      ></ExperienceDetails>
    );
  }
  return (
    <div className="experience-cont">
      <h1>Experience Form</h1>
      <form action="submit" className="experience-form">
        <label htmlFor="company-name" className="company-name">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          placeholder="Enter Company Name"
          className="company-name-input"
          value={current.companyName}
          onChange={changeHandler}
        />
        <label htmlFor="position-title" className="position-title">
          Position Title
        </label>
        <input
          type="text"
          name="positionTitle"
          placeholder="Enter Position Title"
          className="position-title-input"
          value={current.positionTitle}
          onChange={changeHandler}
        />
        <label htmlFor="main-tasks" className="main-tasks">
          Main Tasks of the Job
        </label>
        <textarea
          type="text"
          name="mainTasks"
          className="main-tasks-input"
          placeholder="Enter your main tasks of this job"
          value={current.mainTasks}
          onChange={changeHandler}
        />
        <label htmlFor="from">From :</label>
        <label htmlFor="to">To :</label>
        <input
          type="date"
          name="fromDate"
          value={current.fromDate}
          onChange={changeHandler}
        />
        <input
          type="date"
          name="toDate"
          value={current.toDate}
          onChange={changeHandler}
        />
      </form>
      {[
        <SubmitButton key={uuidv4()} submitForm={submitHandler}></SubmitButton>,
        <DeleteButton
          key={uuidv4()}
          clicked={() => onDelete('experience', id)}
        />,
      ]}
    </div>
  );
}

export default ExperienceForm;
