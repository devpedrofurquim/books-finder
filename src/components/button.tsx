import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: "primary" | "secondary" | "terciary";
}

const Button = ({type = "primary", title, onPress} : ButtonProps) => {

  const styles = StyleSheet.create({
    container: {
        backgroundColor: type === "primary" ? "gray" : "",
        width: "100%",
        marginVertical: 10,

        padding: 10,

        alignItems: 'center',
        
        borderRadius: 10,
        borderWidth: type === "secondary" ? 1 : 0,
        borderColor: type === "secondary" ? "black" : ""
    },
    text: {
        fontSize: type == "terciary" ? 15 : 20,
        fontWeight: 'bold',
        color: type === "primary" ? "white" : "black"
    }
  })
    
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default Button