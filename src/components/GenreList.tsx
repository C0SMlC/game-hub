import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkelton from './GenreListSkelton';

const GenreList = () => {
  const { Data, isLoading } = useGenres();

  if (isLoading) return <GenreListSkelton />;

  return (
    <List>
      {Data.map((g) => (
        <ListItem key={g.id} py={2}>
          <HStack spacing={4}>
            <Image
              boxSize={8}
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
