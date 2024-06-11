import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function App(): React.JSX.Element {

  const styles = StyleSheet.create({
    root: {
      flex: 1,
    }
  })

  return (
   <SafeAreaView style={styles.root}>
    <Text>Hello World</Text>
   </SafeAreaView>
  );
}

export default App;