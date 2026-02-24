import React from 'react'
import { Image, Pressable, View } from 'react-native'
import AppTextBold from '../font/appTextBold'

const Menu = () => {
    const data = [
        {
            id: 1,
            name1: "Tiket",
            name2: "Bus",
            image: require("../../../assets/images/icon/find-bus-w.png"),
        },
        {
            id: 2,
            name1: "Cek",
            name2: "Tiket",
            image: require("../../../assets/images/icon/check-ticket-w.png"),
        },
        {
            id: 3,
            name1: "Cara",
            name2: "Bayar",
            image: require("../../../assets/images/icon/payment-w.png"),
        },
        {
            id: 4,
            name1: "Pusat",
            name2: "Bantuan",
            image: require("../../../assets/images/icon/help-icon.png"),
        },
    ]
  return (
    <>
    {data.map((item) => (
        <Pressable key={item.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 15, backgroundColor: "#fdf8e1", borderWidth: 2, borderColor: "#eae2b7", padding: 10, borderRadius: 50}}>
            <View style={{ backgroundColor: "#f40009", padding: 10, borderRadius: 40}}>
                <Image source={item.image} style={{ width: 35, height: 35, resizeMode: "contain" }} />
            </View>
            <AppTextBold style={{ fontSize: 15, color: "#030303ff", textAlign: "center", paddingVertical: 5}}>{item.name1}{'\n'}{item.name2}</AppTextBold>
        </Pressable>
    ))}
    </>
  )
}

export default Menu
