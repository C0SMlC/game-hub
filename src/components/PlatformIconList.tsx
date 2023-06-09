import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';

import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    mac: FaApple,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    androidnew: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
  };

  return (
    <HStack marginY={'15px'}>
      {platforms.map((platform) => (
        <Icon
          // key={platform.id}
          as={iconMap[platform.slug as keyof typeof iconMap]}
          color="gray.500"
          fontSize={'2xl'}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
