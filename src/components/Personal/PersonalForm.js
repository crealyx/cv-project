import SubmitButton from '../Buttons/SubmitButton';
import { useState, useEffect, useContext } from 'react';
import PersonalDetails from './PersonalDetails';
import FormDataContext from '../../store/form-data-context';
function PersonalForm() {
  const [editMode, setEditMode] = useState(true);
  const dataCtx = useContext(FormDataContext);
  const storedEditMode = localStorage.getItem('personalIsEditing');
  useEffect(() => {
    if (storedEditMode === '0') {
      setEditMode(false);
    } else if (storedEditMode === '1') {
      setEditMode(true);
    }
  }, [storedEditMode]);
  const detailsEditButton = () => {
    setEditMode((prev) => !prev);
    localStorage.setItem('personalIsEditing', '1');
  };
  function validateForm() {
    const inputs = Object.values(dataCtx.personal);
    if (inputs.some((input) => input === '')) {
      alert('Please fill all inputs');
      return true;
    }
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (validateForm()) return;
    setEditMode((prev) => !prev);
    localStorage.setItem('personalIsEditing', '0');
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;
    dataCtx.addPersonalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { firstName, lastName, email, phone } = dataCtx.personal;
  if (!editMode) {
    return (
      <PersonalDetails
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        onEdit={detailsEditButton}
      ></PersonalDetails>
    );
  }
  return (
    <div>
      <h1>Personal Information</h1>
      <form action="submit" className="personal-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={dataCtx.personal.firstName}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={dataCtx.personal.lastName}
          onChange={changeHandler}
        />

        <input
          name="email"
          type="text"
          placeholder="E-Mail"
          value={dataCtx.personal.email}
          onChange={changeHandler}
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={dataCtx.personal.phone}
          onChange={changeHandler}
        />
      </form>
      <SubmitButton submitForm={submitHandler}></SubmitButton>
    </div>
  );
}

export default PersonalForm;
