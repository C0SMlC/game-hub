import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={'space-between'} marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
