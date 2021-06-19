import Buttons from '../Buttons/Buttons';
import Card from '../Card/Card';

function Experience(props) {
  return (
    <Card className="card">
      <h1>Experience</h1>
      <form action="submit" className="experience-form">
        <label htmlFor="company-name" className="company-name">
          Company Name
        </label>
        <input
          type="text"
          placeholder="Enter Company Name"
          className="company-name-input"
        />
        <label htmlFor="position-title" className="position-title">
          Position Title
        </label>
        <input
          type="text"
          placeholder="Enter Position Title"
          className="position-title-input"
        />
        <label htmlFor="main-tasks" className="main-tasks">
          Main Tasks of the Job
        </label>
        <textarea
          type="text"
          className="main-tasks-input"
          placeholder="Enter your main tasks of this job"
        />
        <label htmlFor="from">From :</label>
        <label htmlFor="to">To :</label>
        <input type="date" />
        <input type="date" />
      </form>
      <Buttons></Buttons>
    </Card>
  );
}

export default Experience;
