import EditButton from '../Buttons/EditButton';
import DeleteButton from '../Buttons/DeleteButton';
function EducationDetails(props) {
  console.log(props.passedData);

  const editFormHandler = () => {
    props.onEdit();
  };
  return (
    <div className="education-cont">
      <form action="submit" className="education-form">
        <label htmlFor="school-name" className="school-name">
          School Name
        </label>
        <p>{props.passedData.schoolName}</p>
        <label htmlFor="position-title" className="study-title">
          Study Title
        </label>
        <p>{props.passedData.studyTitle}</p>
        <h3>Date of Study</h3>
        <label htmlFor="from">From :</label>
        <label htmlFor="to">To :</label>
        <p>{props.passedData.fromDate}</p>
        <p>{props.passedData.toDate}</p>
      </form>
      {[<EditButton clicked={editFormHandler} />, <DeleteButton />]}
    </div>
  );
}

export default EducationDetails;
