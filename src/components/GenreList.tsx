import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
  const { Data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <List>
      {Data.map((g) => (
        <ListItem key={g.id} paddingY={'10px'}>
          <HStack>
            <Image
              boxSize={'32px'}
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
              alt={g.name}
            />
            <Text fontSize="md">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
