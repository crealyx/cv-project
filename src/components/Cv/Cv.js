import PersonalDetails from '../Personal/PersonalDetails';
import ExperienceCv from './ExperienceCv';
import EducationCv from './EducationCv';
import Card from '../Card/Card';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Cv(props) {
  const educationCvList = props.educationIds.map((id) => {
    let newData = props.educationData.filter((data) => data.id === id);
    console.log(newData);
    return <EducationCv key={uuidv4()} educationData={newData[0]} />;
  });
  return (
    <div>
      <Card className="cv-container">
        <div className="personal-cv">
          <h1>John Doe</h1>
          <div>
            <h2>E-mail: john@doe.com</h2>
            <h2>Number: 123456789</h2>
          </div>
        </div>
        <h1 className="education">Education</h1>
        {educationCvList}
        <h1 className="experience-cv-title">Experience</h1>
        <ExperienceCv></ExperienceCv>
      </Card>
    </div>
  );
}

export default Cv;
