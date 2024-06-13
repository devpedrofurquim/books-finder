import { Pressable, Text } from 'react-native'
import React from 'react'
import {homeStyles as styles} from '../styles'

interface searchButtonProps {
    title: string;
    onPress: () => void;
}

const HomeButton = ({title, onPress} : searchButtonProps) => {
  return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </Pressable>
  )
}

export default HomeButton;