import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: genre[];
}

const useGenres = () => {
  const [genre, setGenre] = useState<genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenreResponse>('/genres', {
        signal: controller.signal, 
      })
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    // return () => controller.abort();
  }, []);

  return { genre, error, isLoading };
};

export default useGenres;
