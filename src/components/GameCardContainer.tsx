import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: props) => {
  return (
    <Box width="400px" borderRadius={10} overflow={'hidden'}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
