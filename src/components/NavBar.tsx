import { HStack, Image, Text } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo.webp';
import SearchBar, { SearchBarProps } from './SearchBar';

const NavBar = ({ searchQuery }: SearchBarProps) => {
  return (
    <HStack padding={'10px'}>
      <Image src={logo} boxSize="60px" />
      <SearchBar searchQuery={searchQuery} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
