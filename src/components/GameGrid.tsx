import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkelton from './GameCardSkelton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: props) => {
  const { Data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeltons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        spacing={10}
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
