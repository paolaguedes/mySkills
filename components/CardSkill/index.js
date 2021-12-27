import React from 'react'
import {
  TouchableOpacity, 
  Text
} from 'react-native'
import styles from '../../styles/style'


export default function CardSkill(){
  return(
      <TouchableOpacity 
      key="1"
      style={styles.btnSkill}
      activeOpacity={.7}
    >
      <Text style={styles.textSkill}>
        skill
      </Text>
    </TouchableOpacity>
  )
}