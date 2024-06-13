import { Pressable, Text } from 'react-native'
import React from 'react'
import {homeStyles as styles} from '../styles'

interface searchButtonProps {
    title: string;
}

const HomeButton = ({title} : searchButtonProps) => {
  return (
      <Pressable style={styles.button}>
        <Text>{title}</Text>
      </Pressable>
  )
}

export default HomeButton;