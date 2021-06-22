function DeleteButton(props) {
  return (
    <button className="delete-button" onClick={props.clicked}>
      Delete
    </button>
  );
}

export default DeleteButton;
