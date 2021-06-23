import EditButton from '../Buttons/EditButton';
import DeleteButton from '../Buttons/DeleteButton';
function EducationDetails(props) {
  const editFormHandler = () => {
    props.onEdit();
  };
  const deleteHandler = () => {
    props.onDelete();
  };
  return (
    <div className="education-cont">
      <h1>Education Form</h1>
      <form action="submit" className="education-form">
        <label htmlFor="school-name" className="school-name">
          School Name
        </label>
        <p>{props.schoolName}</p>
        <label htmlFor="position-title" className="study-title">
          Study Title
        </label>
        <p>{props.studyTitle}</p>
        <h3>Date of Study</h3>
        <label htmlFor="from">From :</label>
        <label htmlFor="to">To :</label>
        <p>{props.fromDate}</p>
        <p>{props.toDate}</p>
      </form>
      {[
        <EditButton clicked={editFormHandler} />,
        <DeleteButton clicked={deleteHandler} />,
      ]}
    </div>
  );
}

export default EducationDetails;
