import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const DynamicHeading = ({ gameQuery }: Props) => {
  const SearchHeading =
    gameQuery.SearchText !== undefined ? gameQuery.SearchText : '';

  const heading = `${gameQuery.genre?.name || ''} ${
    gameQuery.platform?.name || ''
  }`;

  return (
    <Heading marginBottom={10} marginLeft={8} as="h1">
      {SearchHeading || heading + ' Games'}
    </Heading>
  );
};

export default DynamicHeading;
