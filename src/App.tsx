import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // Mobile
        lg: `"nav nav" "aside  main"`, //1024px
      }}
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'}>aside</GridItem>
      </Show>
      <GridItem area={'main'}>main</GridItem>
    </Grid>
  );
};

export default App;
