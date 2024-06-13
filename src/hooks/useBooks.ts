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

    if (param === 'subjects') {
     baseUrl = 'https://openlibrary.org/subjects/';
    } else {
      baseUrl = 'https://openlibrary.org/search.json?';
    }
    
    try {
        setLoading(true);
        setError(null);
      if (param === 'subjects') {
        response = await fetch(`${baseUrl}${query}.json`);
       } else {
        response = await fetch(`${baseUrl}${param}=${query}&page=1`);
       }
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      if (param === 'subjects') {
        setData(result.works);
        console.log("Data Fetched", result.works);
      } else {
        setData(result.docs);
        console.log("Data Fetched", result.docs);
      }
    } catch (error) {
      console.error('There was an error fetching data!', error);
      console.error(error);
      setData([]);
      setError("Requisição não encontrada");
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    if (query) {
      fetchData('author');
    }
  }, []);

  return { query, setQuery, data, fetchData, loading, error };
}