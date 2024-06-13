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
                setData(result.works);
                break;
            default:
                setData(result.docs);
                break;
        }

    } catch (error) {
        console.error("Houve um erro:", error);
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