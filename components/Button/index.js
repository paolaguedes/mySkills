import React from 'react'
import {
  TouchableOpacity, 
  Text
} from 'react-native'
import styles from '../../styles/style'

export default function Button({onPress}) {
  return(
    <TouchableOpacity 
      style={styles.btn}
      activeOpacity={.7}
      onPress={onPress}
    >
      <Text style={styles.btnText}>Add</Text>
    </TouchableOpacity>
  )
}