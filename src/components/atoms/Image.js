export default function Image(props) {
  const { image, imgClass } = props;
  return (
    <>
      <img className={imgClass} src={image} alt='img' />
    </>
  );
}
