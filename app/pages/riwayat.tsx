import { useRiwayat } from '@/hooks/useRiwayat'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import TicketCard from '../components/riwayat/tiket_card'
import Navbar from '../navigate/navbar'


const Riwayat = () => {
  const { riwayat, loading, error, search, setSearch, fetchRiwayat } = useRiwayat();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>Riwayat Transaksi</Text>
        <View style={styles.search}>
          <Ionicons name="search" size={24} color="white" />
          <TextInput placeholder="Masukan Kode Booking" placeholderTextColor={'white'} value={search} onChangeText={setSearch} onSubmitEditing={fetchRiwayat} cursorColor={'white'} style={{ flex: 1, color: "white" }}/>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.containerContent} >
        {riwayat.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => console.log('first')} activeOpacity={0.5} >
            <TicketCard data={item}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    },
    containerContent: {
        flex: 1,
        marginBottom: 90,
    },
})
