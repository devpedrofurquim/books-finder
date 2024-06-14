import { View, Text, Image } from 'react-native';
import React from 'react';
import { Book } from '../../../../types/book';
import { bookStyles as styles } from '../styles';

interface bookProps {
    book : Book
}

const Books = ( { book } : bookProps) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{book.title}</Text>
    <Text style={styles.author}>{(book.author_name?.[0] ?? book.authors?.[0]?.name ?? '')}</Text>
    <Image source={{uri: `https://covers.openlibrary.org/b/id/${book.cover_i | book.cover_id}-M.jpg`}} width={300} height={400}/>
  </View>
  )
}

export default Books