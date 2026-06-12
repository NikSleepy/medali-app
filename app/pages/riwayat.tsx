import { useRiwayat } from '@/hooks/useRiwayat'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import TicketCard from '../components/riwayat/tiket_card'
import Navbar from '../navigate/navbar'
import { useRouter } from 'expo-router'


const Riwayat = () => {
  const router = useRouter();
  const { riwayat, loading, error, search, isLoggedIn, setSearch, fetchRiwayat } = useRiwayat();

  if (!isLoggedIn && !loading) {
    return (
      <View style={styles.container}>
        <View style={styles.loginGate}>
          <Ionicons name="lock-closed-outline" size={48} color="#ccc" />
          <Text style={styles.loginGateTitle}>Belum Login</Text>
          <Text style={styles.loginGateSubtitle}>
            Login terlebih dahulu untuk melihat riwayat transaksi
          </Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push('/pages/login')}
          >
            <Text style={styles.loginButtonText}>Login Sekarang</Text>
          </TouchableOpacity>
        </View>
        <Navbar />
      </View>
    );
  }
  
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
    loginGate: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      gap: 12,
    },
    loginGateTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 8,
    },
    loginGateSubtitle: {
      fontSize: 14,
      color: '#888',
      textAlign: 'center',
    },
    loginButton: {
      backgroundColor: '#E13726',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      marginTop: 8,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    headerTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    emptyText: {
      textAlign: 'center',
      color: '#888',
      marginTop: 32,
    },
})
