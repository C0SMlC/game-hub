import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search Games" variant={'filled'} />
    </InputGroup>
  );
};

export default SearchBar;
