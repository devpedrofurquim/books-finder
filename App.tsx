import React, { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text } from 'react-native';
import Navigation from './src/navigation';

function App(): React.JSX.Element {

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';
    try {
      const response = await fetch(`${baseUrl}/api/data`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result.message);
      console.warn("Data Fetched");
    } catch (error) {
      console.error('There was an error fetching data!', error);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

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