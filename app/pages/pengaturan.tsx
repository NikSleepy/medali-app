import { useAuth } from '@/hooks/useAuth'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Navbar from '../navigate/navbar'



const pengaturan = () => {
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      const out = await logout();
      if (out) {
        router.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>pengaturan</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#E13726",
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => {
          handleLogout();
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Logout</Text>
      </TouchableOpacity>
      <Navbar />
    </View>
  )
}

export default pengaturan