function PreviewButton(props) {
  const previewHandler = () => {
    props.onClick();
  };
  return (
    <div onClick={previewHandler} className="preview-button">
      <p>{'>>'}</p>
    </div>
  );
}

export default PreviewButton;
