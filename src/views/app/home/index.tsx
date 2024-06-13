import { View, Text, ScrollView, Image } from 'react-native'
import { homeStyles as styles} from './styles';
import Input from '../../../components/input';
import HomeButton from './_components/homeButton';
import useBooks from '../../../hooks/useBooks';
import Books from './_components/book';

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
      {loading && <Text style={styles.load}>Carregando...</Text>}
      {error && <Text style={styles.errors}>{error}</Text>}
      {data.map(book => (
       <Books book={book} key={book.key}/>
      ))}
    </View>
  </ScrollView>
  )
}

export default Home