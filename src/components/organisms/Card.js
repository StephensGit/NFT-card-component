// Components
import CardContent from '../molecules/CardContent';
import Ethereum from '../molecules/Ethereum';
import Footer from '../molecules/Footer';
import Image from '../atoms/Image';
import Time from '../molecules/Time';

// Styles
import './Card.css';

// Images
import headerImg from '../../images/image-equilibrium.jpg';

export default function Card() {
  return (
    <div className='card'>
      <Image className='headerImg' image={headerImg} imgClass={'headerImg '} />
      <CardContent />
      <div className='flex-row'>
        <Ethereum className='ethereum' />
        <Time className='time' />
      </div>
      <Footer />
    </div>
  );
}
