import Card from '../Card/Card';
import SubmitButton from '../Buttons/SubmitButton';

function Personal(props) {
  const previewHandler = () => {
    console.log('submit');
  };
  return (
    <Card className="card">
      <h1>Personal Information</h1>
      <form action="submit" className="personal-form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />

        <input name="email" type="text" placeholder="E-Mail" />

        <input name="phone-number" type="number" placeholder="Phone Number" />
      </form>
      <SubmitButton submitForm={previewHandler}></SubmitButton>
    </Card>
  );
}

export default Personal;
