import PersonalDetails from '../Personal/PersonalDetails';
import ExperienceCv from './ExperienceCv';
import EducationCv from './EducationCv';
import Card from '../Card/Card';
function Cv(props) {
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
        <EducationCv></EducationCv>
        <h1 className="experience-cv-title">Experience</h1>
        <ExperienceCv></ExperienceCv>
      </Card>
    </div>
  );
}

export default Cv;
