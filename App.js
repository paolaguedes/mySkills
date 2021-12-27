import React, { useState} from 'react'
import {
  Text, 
  View, 
  TextInput
} from 'react-native'
import styles from './styles/style.js'
import Button from './components/Button'
import CardSkill from './components/CardSkill'

export default function App() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkill() {
    setMySkills(oldSkill => [...oldSkill, newSkill])
  }

  return (
    <View style={styles.default}>
      <Text style={styles.title}>Welcome, Paola!</Text>

      <TextInput 
        style={styles.input}
        placeholder="new skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill}/>

      <Text style={[styles.title, { marginTop: 30, marginBottom: 20}]}>
        My Skills
      </Text>

      {
        mySkills.map(skill => (
          <CardSkill/>
        ))
      }

    </View>
  );
}