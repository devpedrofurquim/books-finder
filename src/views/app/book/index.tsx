import { View, Text, Image } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { AppRoutes } from '../../../navigation/_types/navigation';

type BookUnityProps = {
  route: RouteProp<AppRoutes, 'BookUnity'>;
};

const BookUnity: React.FC<BookUnityProps> = ({ route }) => {
  const { book } = route.params;

  return (
    <View>
      <Text>{book.author_name}</Text>
      <Text>{book.title}</Text>
      <Image source={{uri: `https://covers.openlibrary.org/b/id/${book.cover_i | book.cover_id}-M.jpg`}} width={300} height={400}/>
    </View>
  );
};

export default BookUnity;