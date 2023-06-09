import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkelton from './GameCardSkelton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: props) => {
  const { Data, error, isLoading } = useGames(gameQuery);
  const skeltons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
        }}
        spacing={6}
      >
        {isLoading &&
          skeltons.map((skelton) => (
            <GameCardContainer key={skelton}>
              <GameCardSkelton />
            </GameCardContainer>
          ))}
        {Data.map((data) => (
          <GameCardContainer key={data.id}>
            <GameCard game={data} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
