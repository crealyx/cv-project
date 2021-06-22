import EducationForm from '../Education/EducationForm';
import EducationDetails from '../Education/EducationDetails';
import Experience from '../Experience/ExperienceForm';
import PersonalForm from '../Personal/PersonalForm';
import PersonalDetails from '../Personal/PersonalDetails';
import Header from '../Header/Header';
import Card from '../Card/Card';
import React, { useState } from 'react';
import AddButton from '../Buttons/AddButton';
function App() {
  // Event Handlers
  const educationComponentHandler = () => {
    setEducationFormList(
      educationFormList.concat(
        <EducationForm
          passedData={editableEducationData}
          onSubmit={educationSubmitHandler}
          key={educationFormList.length}
          educationFormId={educationFormList.length}
        />
      )
    );
    setEducationDetailsList(
      educationDetailsList.concat(
        <EducationDetails
          onEdit={() => {
            setEducationEditing(false);
          }}
          passedData={editableEducationData}
          key={educationDetailsList.length}
          educationDetailsId={educationDetailsList.length}
        />
      )
    );
  };
  const experienceComponentHandler = () => {
    setExperienceFormList(
      experienceFormList.concat(<Experience key={experienceFormList.length} />)
    );
  };

  const personalSubmitHandler = (data) => {
    setEditablePersonalData(data);
    setPersonalEditing(true);
  };
  const educationSubmitHandler = (data) => {
    console.log(data);
    setEditableEducationData(data);
    console.log(editableEducationData);
    setEducationEditing(true);
  };

  // State Hooks
  const [isEducationEditing, setEducationEditing] = useState(false);
  const [isPersonalEditing, setPersonalEditing] = useState(false);
  const [educationDetailsList, setEducationDetailsList] = useState([]);
  const [educationFormList, setEducationFormList] = useState([]);
  const [experienceFormList, setExperienceFormList] = useState([]);
  const [editablePersonalData, setEditablePersonalData] = useState(
    (prevState) => ({ ...prevState })
  );
  const [editableEducationData, setEditableEducationData] = useState(
    (prevState) => ({ ...prevState })
  );
  return (
    <div className="App">
      <Header></Header>
      <Card>
        {isPersonalEditing ? (
          <PersonalDetails
            onEdit={() => {
              setPersonalEditing(false);
            }}
            passedData={editablePersonalData}
          ></PersonalDetails>
        ) : (
          <PersonalForm
            passedData={editablePersonalData}
            onSubmit={personalSubmitHandler}
          ></PersonalForm>
        )}
      </Card>
      <Card>
        <h1>Education</h1>
        {isEducationEditing ? educationDetailsList : educationFormList}

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
