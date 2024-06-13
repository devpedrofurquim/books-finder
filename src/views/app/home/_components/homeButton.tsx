import { Pressable, Text } from 'react-native'
import React, { useState } from 'react'
import {homeStyles as styles} from '../styles'

interface searchButtonProps {
    title: string;
    onPress: () => void;
    isPressed: boolean;
}

const HomeButton = ({title, onPress, isPressed} : searchButtonProps) => {

  return (
      <Pressable style={[styles.button, {backgroundColor: isPressed ? '#055C9D' : 'gray'}]} onPress={onPress}>
        <Text style={[styles.buttonTitle]}>{title}</Text>
      </Pressable>
  )
}

export default HomeButton;