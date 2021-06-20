import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Personal from '../Personal/Personal';
import Header from '../Header/Header';
import Card from '../Card/Card';
import React, { useState } from 'react';
import AddButton from '../Buttons/AddButton';
function App() {
  const [educationFormList, setEducationFormList] = useState([]);
  const [experienceFormList, setExperienceFormList] = useState([]);

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
      <Personal></Personal>
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
