import { View, Text, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { AppRoutes } from '../../../navigation/_types/navigation';
import { bookStyles as styles} from './styles'
import AmazonIcon from '../../../../assets/icons/amazon.png'

type BookUnityProps = {
  route: RouteProp<AppRoutes, 'BookUnity'>;
};

const BookUnity: React.FC<BookUnityProps> = ({ route }) => {

  const { book } = route.params;

  const openAmazonLink = (id: string) => {
    const url = `https://www.amazon.com/dp/${id}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.author}>{`Autor: ` + book.author_name}</Text>
        <Text style={styles.title}>{book.title}</Text>
        <Image source={{uri: `https://covers.openlibrary.org/b/id/${book.cover_i | book.cover_id}-M.jpg`}} style={styles.cover}/>
        <Text style={styles.first_publish_year}>{'Ano de publicação: ' + book.first_publish_year}</Text>
        <Text style={styles.first_sentence}>{'Início: ' + book.first_sentence}</Text>
        <Text style={styles.number_of_pages_median}>{'Páginas: ' + book.number_of_pages_median}</Text>
      {
        book.id_amazon && (
          <TouchableOpacity style={styles.id_amazon} onPress={() => openAmazonLink(book.id_amazon[0])} activeOpacity={0.9}>
          <Text style={styles.id_amazon_text}>Encontre na Amazon</Text>
          <Image source={AmazonIcon} style={{width: 40, height: 40}}/>
        </TouchableOpacity>
        )
      }
    </ScrollView>
  );
};

export default BookUnity;