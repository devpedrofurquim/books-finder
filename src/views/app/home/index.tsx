import { View, Text, ScrollView, Image } from 'react-native'
import { homeStyles as styles} from './styles';
import Input from '../../../components/input';
import React, { useEffect, useState } from 'react';
import HomeButton from './_components/homeButton';

interface Book {
  cover_i: number;
  key: string;
  title: string;
  author_name: [string];
  first_publish_year: number;
}

const Home = () => {
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<Book[]>([]);

  const fetchData = async () => {
    const baseUrl = 'https://openlibrary.org/search.json?';
    try {
      const response = await fetch(`${baseUrl}title=${query}&page=1`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result.docs);
      console.log("Data Fetched", result.docs);
    } catch (error) {
      console.error('There was an error fetching data!', error);
    }
  };

  const onBuscar = () => {
    fetchData();
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Books Finder</Text>
      <Input
        placeholder='Pesquisar'
        value={query}
        setValue={setQuery}
      />
      <HomeButton title='Autor'/>
      {data.map(book => (
        <View key={book.key}>
          <Text>{book.title}</Text>
          <Text>{book.cover_i}</Text>
          <Image source={{uri: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}} width={80} height={80}/>
        </View>
      ))}
    </View>
  </ScrollView>
  )
}

export default Home