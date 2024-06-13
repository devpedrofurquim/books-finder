import { View, Text, ScrollView, Image } from 'react-native'
import { homeStyles as styles} from './styles';
import Input from '../../../components/input';
import HomeButton from './_components/homeButton';
import useBooks from '../../../hooks/useBooks';

const Home = () => {
  const { query, setQuery, data, fetchData, loading, error } = useBooks('Robert Cecil Martin');

  async function onSearch(param: string) {
    switch(param) {
      case 'title':
        await fetchData(param);
        break;
      case 'author':
        await fetchData(param);
        break;
      case 'subjects':
        await fetchData(param);
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
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
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