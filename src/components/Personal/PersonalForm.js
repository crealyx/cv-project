import Card from '../Card/Card';
import SubmitButton from '../Buttons/SubmitButton';
import { useState } from 'react';

function PersonalForm(props) {
  const [firstNameData, setFirstNameData] = useState('');
  const [lastNameData, setLastNameData] = useState('');
  const [emailData, setEmailData] = useState('');
  const [phoneData, setPhoneData] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const personalData = {
      firstName: firstNameData,
      lastName: lastNameData,
      email: emailData,
      phone: phoneData,
    };
    props.onSubmit(personalData);
  };

  const firstNameHandler = (event) => {
    setFirstNameData(event.target.value);
  };

  const lastNameHandler = (event) => {
    setLastNameData(event.target.value);
  };

  const emailHandler = (event) => {
    setEmailData(event.target.value);
  };
  const phoneHandler = (event) => {
    setPhoneData(event.target.value);
  };
  return (
    <div>
      <h1>Personal Information</h1>
      <form action="submit" className="personal-form">
        <input
          type="text"
          placeholder="First Name"
          value={firstNameData}
          onChange={firstNameHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastNameData}
          onChange={lastNameHandler}
        />

        <input
          name="email"
          type="text"
          placeholder="E-Mail"
          value={emailData}
          onChange={emailHandler}
        />

        <input
          name="phone-number"
          type="tel"
          placeholder="Phone Number"
          value={phoneData}
          onChange={phoneHandler}
        />
      </form>
      <SubmitButton submitForm={submitHandler}></SubmitButton>
    </div>
  );
}

export default PersonalForm;
