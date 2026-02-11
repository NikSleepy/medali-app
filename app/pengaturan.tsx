import React from 'react'
import { Text, View } from 'react-native'
import Navbar from './components/route/navbar'


const pengaturan = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>pengaturan</Text>
      <Navbar />
    </View>
  )
}

export default pengaturan