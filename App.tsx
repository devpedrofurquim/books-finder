import React, { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text } from 'react-native';
import Navigation from './src/navigation';

function App(): React.JSX.Element {

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#f6f6f6'
    },
  })

  return (
   <SafeAreaView style={styles.root}>
    <Navigation/>
   </SafeAreaView>
  );
}

export default App;