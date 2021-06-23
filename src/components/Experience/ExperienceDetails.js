import EditButton from '../Buttons/EditButton';
import DeleteButton from '../Buttons/DeleteButton';
function ExperienceDetails(props) {
  const editFormHandler = () => {
    props.onEdit();
  };
  const deleteHandler = () => {
    props.onDelete();
  };
  return (
    <div className="experience-cont">
      <h1>Experience Details</h1>
      <form action="submit" className="experience-form">
        <label htmlFor="company-name" className="company-name">
          Company Name
        </label>
        <p>{props.companyName}</p>
        <label htmlFor="position-title" className="position-title">
          Position Title
        </label>
        <p>{props.positionTitle}</p>
        <label htmlFor="main-tasks" className="main-tasks">
          Main Tasks of the Job
        </label>
        <p className="main-tasks-input">{props.mainTasks}</p>
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

export default ExperienceDetails;
