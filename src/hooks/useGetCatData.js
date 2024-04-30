import { useState, useEffect, useCallback } from 'react';
import { CatInfo } from '../models/CatInfo';

export const useGetCatData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCatData = useCallback(async () => {
    try {
      const queryParams = { limit: 12, has_breeds: 1 };
      const baseUrl = 'https://api.thecatapi.com/v1/images/search';
      const queryString = new URLSearchParams(queryParams).toString();
      const url = `${baseUrl}?${queryString}`;

      const response = await fetch(url, {
        headers: {
          'content-type': 'application/json',
          'x-api-key': import.meta.env.VITE_CAT_API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const responseData = await response.json();
      const catData = responseData.map((catData) => new CatInfo(catData));
      setData(catData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCatData();
  }, [fetchCatData]);

  return { data, loading, error };
};
