// Components
import Image from '../atoms/Image';
import Text from '../atoms/Text';

// Styles
import './Footer.css';

// Images
import avatar from '../../images/image-avatar.png';

export default function Footer() {
  return (
    <div className='card-footer'>
      <Image className='avatarImg' image={avatar} imgClass={'avatarImg'} />
      <Text text={'Creation of'} textClass={'span'} />
      <Text text={'Jules Wyvern'} textClass={'text'} />
    </div>
  );
}
