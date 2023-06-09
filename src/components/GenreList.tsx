import { HStack, Image, List, ListItem, Button } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkelton from './GenreListSkelton';

interface props {
  onSelectedGenre: (Genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectedGenre, selectedGenre }: props) => {
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
              objectFit="cover"
              alt={g.name}
            />
            <Button
              onClick={() => onSelectedGenre(g)}
              fontSize="md"
              variant={'link'}
              fontWeight={selectedGenre?.id === g.id ? 'bold' : 'normal'}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
