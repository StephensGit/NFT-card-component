// Components
import Image from '../atoms/Image';
import Text from '../atoms/Text';

// Styles
import './Ethereum.css';
// Images
import currencyImg from '../../images/icon-ethereum.svg';

export default function Ethereum() {
  return (
    <div className='ethereum'>
      <Image
        className={'currencyIcon'}
        image={currencyImg}
        imgClass={'currencyIcon'}
      />
      <Text text={'0.041 ETH'} textClass={'text'} />
    </div>
  );
}
