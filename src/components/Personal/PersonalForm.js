import SubmitButton from '../Buttons/SubmitButton';
import { useState, useEffect, useContext } from 'react';
import PersonalDetails from './PersonalDetails';
import FormDataContext from '../../store/form-data-context';
function PersonalForm(props) {
  const [editMode, setEditMode] = useState(true);
  const dataCtx = useContext(FormDataContext);
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
  // const [personalData, setPersonalData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  // });
  const submitHandler = (event) => {
    event.preventDefault();
    setEditMode(false);
    localStorage.setItem('isEditMode', '0');
    // dataCtx.addPersonalData(personalData);
    // console.log(personalData);
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;
    dataCtx.addPersonalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // setPersonalData((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));
    // dataCtx.changePersonalData(event);
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
