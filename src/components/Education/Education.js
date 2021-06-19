import Buttons from '../Buttons/Buttons';
import Card from '../Card/Card';

function Education(props) {
  return (
    <Card className="card">
      <h1>Education</h1>
      <form action="submit" className="education-form">
        <label htmlFor="school-name" className="school-name">
          School Name
        </label>
        <input
          type="text"
          placeholder="Enter School Name"
          className="school-name-input"
        />
        <label htmlFor="position-title" className="study-title">
          Study Title
        </label>
        <input
          type="text"
          placeholder="Enter Study Title"
          className="study-title-input"
        />
        <h3>Date of Study</h3>
        <label htmlFor="from">From :</label>
        <label htmlFor="to">To :</label>
        <input type="date" />
        <input type="date" />
      </form>
      <Buttons></Buttons>
    </Card>
  );
}

export default Education;
