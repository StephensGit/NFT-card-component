// Components
import Image from '../atoms/Image';
import Text from '../atoms/Text';

// Images
import avatar from '../../images/image-avatar.png';

export default function Footer() {
  return (
    <div>
      <Image className='avatarImg' image={avatar} imgClass={'avatarImg'} />
      <Text text={'Creation of Jules Wyvern'} />
    </div>
  );
}
