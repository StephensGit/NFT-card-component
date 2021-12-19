export default function Image(props) {
  const { image, imgClass } = props;
  return (
    <div>
      <img className={imgClass} src={image} alt='img' />
    </div>
  );
}
