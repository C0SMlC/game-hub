import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface props {
  sortBy: (value: string) => void;
  sortParameter: string | null;
}
const SortSelector = ({ sortBy, sortParameter }: props) => {
  const sortOrder = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '=released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ];

  const SelectedSort = sortOrder.find(
    (option) => option.value === sortParameter
  );

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        marginBottom={10}
        marginLeft={8}
      >
        {`Order By : ${SelectedSort?.label || 'Relevance'}`}
      </MenuButton>
      <MenuList>
        {sortOrder.map((option) => (
          <MenuItem
            onClick={() => sortBy(option.value)}
            value={option.value}
            key={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
