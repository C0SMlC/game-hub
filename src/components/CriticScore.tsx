import { Badge } from '@chakra-ui/react';
import React from 'react';

interface props {
  score: number;
}

const CriticScore = ({ score }: props) => {
  let color = score > 90 ? 'green' : 'red';

  return (
    <Badge
      colorScheme={color}
      fontSize={'20px'}
      paddingX={2}
      borderRadius={'4px'}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
