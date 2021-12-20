// Styles
import './HeaderTwo.css';

export default function HeaderTwo(props) {
  const { text, titleClass } = props;
  return (
    <>
      <h2 className={titleClass}>{text}</h2>
    </>
  );
}
