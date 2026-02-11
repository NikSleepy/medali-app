import React from 'react'
import { Text, View } from 'react-native'
import Navbar from './components/route/navbar'


const pesan = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>pesan</Text>
      <Navbar />
    </View>
  )
}

export default pesan