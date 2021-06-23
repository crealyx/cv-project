import EducationForm from '../Education/EducationForm';
import ExperienceForm from '../Experience/ExperienceForm';
import PersonalForm from '../Personal/PersonalForm';
import PersonalDetails from '../Personal/PersonalDetails';
import Header from '../Header/Header';
import Card from '../Card/Card';
import React, { useState } from 'react';
import AddButton from '../Buttons/AddButton';
import PreviewButton from '../Buttons/PreviewButton';
import Cv from '../Cv/Cv';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [educationIds, setEducationIds] = useState([]);
  const [experienceIds, setExperienceIds] = useState([]);

  const addComponentHandler = (type) => {
    if (type === 'education') {
      setEducationIds((prevEducationIds) => [...prevEducationIds, uuidv4()]);
    } else {
      setExperienceIds((prevExperienceIds) => [...prevExperienceIds, uuidv4()]);
    }
  };
  const deleteComponentHandler = (type, id) => {
    if (type === 'education') {
      setEducationIds((previousEducationIds) => {
        let deletedList = previousEducationIds.filter((key) => key !== id);
        return deletedList;
      });
    } else {
      setExperienceIds((previousExperienceIds) => {
        let deletedList = previousExperienceIds.filter((key) => key !== id);
        return deletedList;
      });
    }
  };
  const educationForms = educationIds.map((id) => (
    <EducationForm key={id} id={id} onDelete={deleteComponentHandler} />
  ));
  const experienceForms = experienceIds.map((id) => (
    <ExperienceForm key={id} id={id} onDelete={deleteComponentHandler} />
  ));

  const changeToPreview = () => {
    setPreview((prevState) => !prevState);
  };
  // State Hooks
  const [isPreview, setPreview] = useState(false);
  return (
    <div className="App">
      <Header></Header>
      {!isPreview ? (
        <div className="main-container">
          <Card>
            <PersonalForm></PersonalForm>
          </Card>
          <Card>
            <h1>Education</h1>
            {educationForms}
            {
              <AddButton
                addComponent={() => addComponentHandler('education')}
              />
            }
          </Card>
          <Card>
            <h1>Experience</h1>
            {experienceForms}
            {
              <AddButton
                addComponent={() => addComponentHandler('experience')}
              />
            }
          </Card>
        </div>
      ) : (
        <Card>
          <Cv></Cv>
        </Card>
      )}
      <PreviewButton onClick={changeToPreview}></PreviewButton>
    </div>
  );
}

export default App;
