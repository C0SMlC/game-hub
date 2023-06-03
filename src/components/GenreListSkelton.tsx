import { HStack, List, ListItem, Skeleton } from '@chakra-ui/react';

const GenreListSkelton = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 41, 51, 24].map((index) => (
        <HStack key={index} spacing={4} align="center" py={2} mb={2}>
          <Skeleton boxSize={8} borderRadius={8} />
          <Skeleton width="100px" height="20px" />
        </HStack>
      ))}
    </>
  );
};

export default GenreListSkelton;
