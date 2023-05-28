import React from 'react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
