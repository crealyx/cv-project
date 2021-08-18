import ExperienceCv from './ExperienceCv';
import EducationCv from './EducationCv';
import Card from '../Card/Card';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormDataContext from '../../store/form-data-context';
function Cv(props) {
  const dataCtx = useContext(FormDataContext);
  const educationCvList = props.educationIds.map((id) => {
    let newData = dataCtx.education.filter((data) => data.id === id);
    return <EducationCv key={uuidv4()} educationData={newData[0]} />;
  });
  const experienceCvList = props.experienceIds.map((id) => {
    let newData = dataCtx.experience.filter((data) => data.id === id);
    return <ExperienceCv key={uuidv4()} experienceData={newData[0]} />;
  });
  console.log(dataCtx.experience);
  return (
    <div>
      <Card className="cv-container">
        <div className="personal-cv">
          <h1>
            {dataCtx.personal.firstName} {dataCtx.personal.lastName}
          </h1>
          <div>
            <h2>{dataCtx.personal.email}</h2>
            <h2>{dataCtx.personal.phone}</h2>
          </div>
        </div>
        <h1 className="education">Education</h1>
        {educationCvList}
        <h1 className="experience-cv-title">Experience</h1>
        {experienceCvList}
      </Card>
    </div>
  );
}

export default Cv;
