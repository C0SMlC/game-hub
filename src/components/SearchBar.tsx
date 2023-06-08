import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

export interface SearchBarProps {
  searchQuery: (SearchText: string) => void;
}
const SearchBar = ({ searchQuery }: SearchBarProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) searchQuery(ref.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search Games"
          variant={'filled'}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
