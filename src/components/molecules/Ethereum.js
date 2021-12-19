// Components
import Image from '../atoms/Image';
import Text from '../atoms/Text';

// Styles

// Images
import currencyImg from '../../images/icon-ethereum.svg';

export default function Ethereum() {
  return (
    <div>
      <Image
        className={'currencyIcon'}
        image={currencyImg}
        imgClass={'currencyIcon'}
      />
      <Text text={'0.041 ETH'} />
    </div>
  );
}
