import SubmitButton from '../Buttons/SubmitButton';

function Education(props) {
  return (
    <div className="education-cont">
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
      <SubmitButton></SubmitButton>
    </div>
  );
}

export default Education;
