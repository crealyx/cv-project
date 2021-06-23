function PreviewButton(props) {
  const previewHandler = (e) => {
    props.onClick(e);
  };
  return (
    <div onClick={(e) => previewHandler(e)} className="preview-button">
      <p>{'>>'}</p>
    </div>
  );
}

export default PreviewButton;
