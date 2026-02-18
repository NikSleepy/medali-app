import React from 'react'
import { Text, View } from 'react-native'
import Navbar from '../navigate/navbar'



const Pesan = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pesan</Text>
      <Navbar />
    </View>
  )
}

export default Pesan