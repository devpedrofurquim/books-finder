import { View, TextInput, StyleSheet } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'

interface InputProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    placeholder: string;
    isSecureTextEntry?: boolean
}

const Input = ({placeholder, value, setValue, isSecureTextEntry} : InputProps) => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: "white",
            width: "100%",

            borderRadius: 10,

            paddingHorizontal: 20,

            marginVertical: 10,
        },
        input: {

        }
    })

  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input} 
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      secureTextEntry={isSecureTextEntry}
      ></TextInput>
    </View>
  )
}

export default Input;