import EditButton from '../Buttons/EditButton';

function PersonalDetails(props) {
  const editFormHandler = () => {
    props.onEdit();
  };
  return (
    <div className="personal-details">
      <h1>Personal Information</h1>
      <div className="details-container">
        <h2 className="first-name">First Name</h2>
        <p>{props.passedData.firstName}</p>
        <h2 className="last-name">Last Name</h2>
        <p>{props.passedData.lastName}</p>
        <h2 className="email">E-Mail</h2>
        <p>{props.passedData.email}</p>
        <h2 className="phone-number">Phone Number</h2>
        <p>{props.passedData.phone}</p>
      </div>
      <EditButton clicked={editFormHandler}></EditButton>
    </div>
  );
}

export default PersonalDetails;
