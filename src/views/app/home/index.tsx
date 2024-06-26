import { View, Text, ScrollView, TouchableOpacity} from 'react-native'
import { homeStyles as styles} from './styles';
import Input from '../../../components/input';
import HomeButton from './_components/homeButton';
import useBooks from '../../../hooks/useBooks';
import Books from './_components/book';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutes } from '../../../navigation/_types/navigation';

type bookRoute = StackNavigationProp<AppRoutes, 'Home'>;


const Home = () => {

  const navigation = useNavigation<bookRoute>();

  const { query, setQuery, data, fetchData, loading, error } = useBooks('Robert Cecil Martin');

  const [pressedButton, setPressedButton] = useState<string | null>(null);

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

  function onButtonPressed(param: string) {
    onSearch(param);
    setPressedButton(param);
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
        <HomeButton title='Livro' onPress={() => onButtonPressed('title')} isPressed={pressedButton === 'title'}/>
        <HomeButton title='Autor' onPress={() => onButtonPressed('author')} isPressed={pressedButton === 'author'}/>
        <HomeButton title='Genêro' onPress={() => onButtonPressed('subjects')} isPressed={pressedButton === 'subjects'}/>
      </View>
      {loading && <Text style={styles.load}>Carregando...</Text>}
      {error && <Text style={styles.errors}>{error}</Text>}
      {data.map(book => (
        <TouchableOpacity key={book.key} activeOpacity={0.9} onPress={() => navigation.navigate('BookUnity', {book})}>
          <Books book={book}/>
        </TouchableOpacity>
      ))}
    </View>
  </ScrollView>
  )
}

export default Home