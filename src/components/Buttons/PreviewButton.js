import { useContext } from 'react';
import FormDataContext from '../../store/form-data-context';
function PreviewButton(props) {
  const dataCtx = useContext(FormDataContext);
  function validateForm() {
    if (dataCtx.education.length === 0) {
      alert('Please add education info');
      return true;
    } else if (dataCtx.experience.length === 0) {
      alert('Please add experience info');
      return true;
    }
  }
  const previewHandler = (e) => {
    if (validateForm()) return;
    props.onClick(e);
  };
  return (
    <div onClick={(e) => previewHandler(e)} className="preview-button">
      <p>{'>>'}</p>
    </div>
  );
}

export default PreviewButton;
