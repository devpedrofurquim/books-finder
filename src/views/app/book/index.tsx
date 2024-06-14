import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { AppRoutes } from '../../../navigation/_types/navigation';
import RenderBook from './_components/RenderBook';

type BookUnityProps = {
  route: RouteProp<AppRoutes, 'BookUnity'>;
};

const BookUnity: React.FC<BookUnityProps> = ({ route }) => {

  const { book } = route.params;

  return (
    <RenderBook book={book}/>
  );
};

export default BookUnity;