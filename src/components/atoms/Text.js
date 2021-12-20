// Styles
import './Text.css';

export default function Text(props) {
  const { text, textClass } = props;
  return (
    <>
      <p className={textClass}>{text}</p>
    </>
  );
}
