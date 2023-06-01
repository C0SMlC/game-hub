import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GameCardSkelton = () => {
  return (
    <Card>
      <Skeleton height={'300px'} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkelton;
