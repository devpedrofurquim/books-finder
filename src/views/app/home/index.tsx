import { View, Text, ScrollView, Image } from 'react-native'
import { homeStyles as styles} from './styles';
import Input from '../../../components/input';
import React, { useEffect, useState } from 'react';
import HomeButton from './_components/homeButton';
import { Book } from '../../../types/book';

const Home = () => {
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<Book[]>([]);

  const fetchData = async (param: string) => {
    let baseUrl;
    let response;

    if (param === 'subjects') {
     baseUrl = 'https://openlibrary.org/subjects/';
    } else {
      baseUrl = 'https://openlibrary.org/search.json?';
    }
    
    try {
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
    }
  };

  async function onSearch(param: string) {
    setQuery(query);
    switch(param) {
      case 'title':
        fetchData(param);
        break;
      case 'author':
        fetchData(param);
        break;
      case 'subjects':
        fetchData(param);
        break;
    }
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Books Finder</Text>
      <Input
        placeholder='Pesquisar'
        value={query}
        setValue={setQuery}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <HomeButton title='Livro' onPress={() => onSearch('title')}/>
        <HomeButton title='Autor' onPress={() => onSearch('author')}/>
        <HomeButton title='Genêro' onPress={() => onSearch('subjects')}/>
      </View>
      {data.map(book => (
        <View key={book.key}>
          <Text>{book.title}</Text>
          <Text>{book.cover_i}</Text>
          <Image source={{uri: `https://covers.openlibrary.org/b/id/${book.cover_i | book.cover_id}-M.jpg`}} width={300} height={400}/>
        </View>
      ))}
    </View>
  </ScrollView>
  )
}

export default Home