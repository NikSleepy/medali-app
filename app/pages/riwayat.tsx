import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Navbar from '../navigate/navbar'


const Riwayat = () => {
  const [ search, setSearch ] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>Riwayat Transaksi</Text>
        <View style={styles.search}>
          <Ionicons name="search" size={24} color="white" />
          <TextInput placeholder="Masukan Kode Booking" placeholderTextColor={'white'} value={search} onChangeText={setSearch} cursorColor={'white'} style={{ color: "white" }}/>
        </View>
      </View>
      <Navbar/>
    </View>
  )
}

export default Riwayat

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "column",
        height: 140,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: "#f40009",
        gap: 20
    },
    search: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#ffffff4d",
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})
