function SubmitButton(props) {
  return (
    <input
      type="submit"
      value="Submit"
      className="submit-button"
      onClick={props.submitForm}
    />
  );
}

export default SubmitButton;
