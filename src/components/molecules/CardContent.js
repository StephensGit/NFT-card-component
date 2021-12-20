// Components
import HeaderTwo from '../atoms/HeaderTwo';
import Text from '../atoms/Text';

export default function CardContent() {
  return (
    <div>
      <HeaderTwo text={'Equilibrium #3429'} titleClass={'card-title'} />
      <Text
        text={'Our Equilibrium collection promotes balance and calm.'}
        textClass={'card-text'}
      />
    </div>
  );
}
