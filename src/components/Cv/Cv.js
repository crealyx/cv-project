import PersonalDetails from '../Personal/PersonalDetails';
function Cv(props) {
  return (
    <div className="cv-container">
      <div className="personal-details">
        <h1>Personal Information</h1>
        <div className="details-container">
          <h2 className="first-name">First Name</h2>
          <p>{props.firstName}</p>
          <h2 className="last-name">Last Name</h2>
          <p>{props.lastName}</p>
          <h2 className="email">E-Mail</h2>
          <p>{props.email}</p>
          <h2 className="phone-number">Phone Number</h2>
          <p>{props.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Cv;
