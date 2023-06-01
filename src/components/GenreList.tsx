import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { Data } = useGenres();
  return (
    <ul>
      {Data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
