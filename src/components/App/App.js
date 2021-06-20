import Education from '../Education/EducationForm';
import Experience from '../Experience/ExperienceForm';
import PersonalForm from '../Personal/PersonalForm';
import PersonalDetails from '../Personal/PersonalDetails';
import Header from '../Header/Header';
import Card from '../Card/Card';
import React, { useState } from 'react';
import AddButton from '../Buttons/AddButton';
function App() {
  const [educationFormList, setEducationFormList] = useState([]);
  const [experienceFormList, setExperienceFormList] = useState([]);

  const editDetailsHandler = () => {
    setPersonalInformation(
      <PersonalForm onSubmit={submitFormHandler}></PersonalForm>
    );
  };
  const submitFormHandler = (personalData) => {
    setPersonalInformation(
      <PersonalDetails
        onEdit={editDetailsHandler}
        passedData={personalData}
      ></PersonalDetails>
    );
  };

  const [personalInformation, setPersonalInformation] = useState(
    <PersonalForm onSubmit={submitFormHandler}></PersonalForm>
  );

  const educationComponentHandler = () => {
    setEducationFormList(
      educationFormList.concat(<Education key={educationFormList.length} />)
    );
  };
  const experienceComponentHandler = () => {
    setExperienceFormList(
      experienceFormList.concat(<Experience key={experienceFormList.length} />)
    );
  };
  return (
    <div className="App">
      <Header></Header>
      <Card>{personalInformation}</Card>
      <Card>
        <h1>Education</h1>
        {educationFormList}
        {<AddButton addComponent={educationComponentHandler} />}
      </Card>
      <Card>
        <h1>Experience</h1>
        {experienceFormList}
        {<AddButton addComponent={experienceComponentHandler} />}
      </Card>
    </div>
  );
}

export default App;
