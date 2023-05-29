import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GameCardSkelton = () => {
  return (
    <Card width="400px" borderRadius={10}>
      <Skeleton height={'300px'} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkelton;
