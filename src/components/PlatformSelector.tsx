import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatform';
import { Platform } from '../hooks/useGames';

interface props {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (Platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: props) => {
  const { Data } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'All Platforms'}
      </MenuButton>
      <MenuList>
        {Data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
