import { View, TextInput, StyleSheet, Image, Pressable } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import IconHide from '../../../../assets/icons/hide.png';
import IconView from '../../../../assets/icons/view.png'

interface InputProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    placeholder: string;
    isSecureTextEntry?: boolean
}

const SecureInput = ({placeholder, value, setValue} : InputProps) => {
    const [hidePass, setHidePass] = useState(true);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: "white",
            width: "100%",

            borderRadius: 10,

            paddingHorizontal: 20,

            marginVertical: 10,
        },
        input: {
            flex: 1,
        }
    })

  return (
    <View style={[styles.container, {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
      <TextInput 
      style={styles.input} 
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      secureTextEntry={hidePass ? true : false}
      autoCapitalize="none"
      >
      </TextInput>
      <Pressable onPress={() => setHidePass(!hidePass)}>
        <Image source={hidePass ? IconView : IconHide} style={{width: 20, height: 20}}/>
      </Pressable>
    </View>
  )
}

export default SecureInput;