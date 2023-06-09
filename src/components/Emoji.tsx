import { Image, ImageProps } from '@chakra-ui/react';
import meh from '../assets/meh.webp';
import thumbsup from '../assets/thumbs-up.webp';
import bullseye from '../assets/bulls-eye.webp';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'Meh', boxSize: '25px' },
    4: { src: thumbsup, alt: 'thumbsup', boxSize: '25px' },
    5: { src: bullseye, alt: 'bullseye', boxSize: '35px' },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
