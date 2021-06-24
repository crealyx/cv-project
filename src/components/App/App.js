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
  const [passedData, setPassedData] = useState();

  const addComponentHandler = (type) => {
    if (type === 'education') {
      let newId = uuidv4();
      setEducationIds((prevEducationIds) => [...prevEducationIds, newId]);
    } else {
      let newId = uuidv4();
      setExperienceIds((prevExperienceIds) => [...prevExperienceIds, newId]);
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
  const dataHandler = (data) => {
    setPassedData(data);
    setEducationDataList((prevState) => [...prevState, data]);
    console.log(educationDataList);
  };
  const [educationDataList, setEducationDataList] = useState([]);
  const educationForms = educationIds.map((id) => (
    <EducationForm
      key={id}
      id={id}
      passData={dataHandler}
      onDelete={deleteComponentHandler}
    />
  ));
  const experienceForms = experienceIds.map((id) => (
    <ExperienceForm key={id} id={id} onDelete={deleteComponentHandler} />
  ));

  const changeToPreview = (e) => {
    console.log(educationForms);
    if (
      e.target.classList.contains('preview-button') &&
      buttonPosition === 'right'
    ) {
      setButtonPosition('left');
      e.target.style.left = '0';
      e.target.style.transform = 'scale(-1,-1)';
    } else if (
      e.target.classList.contains('preview-button') &&
      buttonPosition === 'left'
    ) {
      setButtonPosition('right');
      e.target.style.left = '';
      e.target.style.transform = 'scale(1,-1)';
    } else if (
      e.target.parentElement.classList.contains('preview-button') &&
      buttonPosition === 'right'
    ) {
      setButtonPosition('left');
      e.target.parentElement.style.left = '0';
      e.target.parentElement.style.transform = 'scale(-1,-1)';
    } else if (
      e.target.parentElement.classList.contains('preview-button') &&
      buttonPosition === 'left'
    ) {
      setButtonPosition('right');
      e.target.parentElement.style.left = '';
      e.target.parentElement.style.transform = 'scale(1,-1)';
    }
    setPreview((prevState) => !prevState);
  };
  // State Hooks
  const [isPreview, setPreview] = useState(false);
  const [buttonPosition, setButtonPosition] = useState('right');
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
        <Cv educationIds={educationIds} educationData={educationDataList}></Cv>
      )}
      <PreviewButton onClick={changeToPreview}></PreviewButton>
    </div>
  );
}

export default App;
