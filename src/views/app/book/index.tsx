import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { AppRoutes } from '../../../navigation/_types/navigation';

type BookUnityProps = {
  route: RouteProp<AppRoutes, 'BookUnity'>;
};

const BookUnity: React.FC<BookUnityProps> = ({ route }) => {

  const { book } = route.params;

  const openAmazonLink = (id: string) => {
    const url = `https://www.amazon.com/dp/${id}`;
    Linking.openURL(url);
  };

  const renderAmazonLink = (id: string) => {
    return `https://www.amazon.com/dp/${id}`;
  };


  return (
    <View>
      <Text>{book.author_name}</Text>
      <Text>{book.title}</Text>
      <Text>{book.first_publish_year}</Text>
      <Text>{book.first_sentence}</Text>
      <Text>{book.number_of_pages_median}</Text>
      {
        book.id_amazon && (
          <TouchableOpacity onPress={() => openAmazonLink(book.id_amazon[0])}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>{renderAmazonLink(book.id_amazon[0])}</Text>
        </TouchableOpacity>
        )
      }
      <Image source={{uri: `https://covers.openlibrary.org/b/id/${book.cover_i | book.cover_id}-M.jpg`}} width={300} height={400}/>
    </View>
  );
};

export default BookUnity;