import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

const App = () => {
  const [selectedGenre, setGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // Mobile
        lg: `"nav nav" "aside  main"`, //1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area={'nav'} marginBottom={10}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'} paddingX={5}>
          <GenreList
            onSelectedGenre={(Genre) => setGenre(Genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectedPlatform={(Platform) => setPlatform(Platform)}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
