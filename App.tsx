import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Login from './src/views/auth/login';
import Register from './src/views/auth/register';

function App(): React.JSX.Element {

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f6f6f6'
    },
  })

  return (
   <SafeAreaView style={styles.root}>
    <Login/>
   </SafeAreaView>
  );
}

export default App;