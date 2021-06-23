import SubmitButton from '../Buttons/SubmitButton';
import { useState } from 'react';
import PersonalDetails from './PersonalDetails';
function PersonalForm(props) {
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const submitHandler = (event) => {
    event.preventDefault();
    setEditMode((previousMode) => !previousMode);
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setPersonalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { firstName, lastName, email, phone } = personalData;
  const [editMode, setEditMode] = useState(false);
  if (editMode) {
    return (
      <PersonalDetails
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        onEdit={() => setEditMode((previousMode) => !previousMode)}
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
          value={personalData.firstName}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={personalData.lastName}
          onChange={changeHandler}
        />

        <input
          name="email"
          type="text"
          placeholder="E-Mail"
          value={personalData.email}
          onChange={changeHandler}
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={personalData.phone}
          onChange={changeHandler}
        />
      </form>
      <SubmitButton submitForm={submitHandler}></SubmitButton>
    </div>
  );
}

export default PersonalForm;
