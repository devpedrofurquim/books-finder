import React, { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text } from 'react-native';
import Login from './src/views/auth/login';
import Register from './src/views/auth/register';

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