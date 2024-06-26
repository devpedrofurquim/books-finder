import { useEffect, useState } from "react";
import { Book } from "../types/book";

export default function useBooks(initialQuery: string) {
    const [query, setQuery] = useState<string>(initialQuery);
    const [data, setData] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    
  const fetchData = async (param: string) => {
    let baseUrl;
    let response;

    try {
        setData([]);
        setError(null);
        setLoading(true);

        switch (param) {
            case 'subjects':
                baseUrl = 'https://openlibrary.org/subjects/';
                response = await fetch(`${baseUrl}${query}.json`);
                break;
            default:
                baseUrl = 'https://openlibrary.org/search.json?';
                response = await fetch(`${baseUrl}${param}=${query}&page=1`);
                break;
        }

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();

        switch(param) {
            case 'subjects':
                if (result.works.length === 0) throw new Error('Network response was not ok');
                setData(result.works);
                break;
            default:
                if (result.docs.length === 0) throw new Error('Network response was not ok');
                setData(result.docs);
                break;
        }

    } catch (error) {
        setData([]);
        setError("Pesquisa não encontrada");
    } finally {
        setLoading(false);
    }
}

  useEffect(() => {
    if (query) {
      fetchData('author');
    }
  }, []);

  return { query, setQuery, data, fetchData, loading, error }
}