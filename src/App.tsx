import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import DynamicHeading from './components/DynamicHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string;
  sortParameter: string | null;
  SearchText: string | null;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // Mobile
        lg: `"nav nav" "aside  main"`, //1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
      }}
    >
      <GridItem area={'nav'} marginBottom={10}>
        <NavBar
          searchQuery={(SearchText) =>
            setGameQuery({ ...gameQuery, SearchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'} paddingX={5}>
          <GenreList
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <DynamicHeading gameQuery={gameQuery} />
        <HStack marginBottom={10} marginLeft={8} spacing={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortParameter={gameQuery.sort}
            sortBy={(sort) => setGameQuery({ ...gameQuery, sort })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
