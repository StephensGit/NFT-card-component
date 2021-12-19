// Components
import Image from '../atoms/Image';
import Text from '../atoms/Text';

// Styles
import './Time.css';

// Images
import clockIcon from '../../images/icon-clock.svg';

export default function Time() {
  return (
    <div>
      <Image className='clockIcon' image={clockIcon} imgClass={'clockIcon'} />
      <Text text={'3 days left'} />
    </div>
  );
}
