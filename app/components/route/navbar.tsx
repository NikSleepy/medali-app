import { Href, router, usePathname } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Navbar = () => {
    const [loading, setLoading] = useState(false);
    const pathName = usePathname();

    const handleRoute = (route: Href) => {
        if (pathName === route) return;

        setLoading(true);
        router.push(route);

        // setTimeout(() => {
        //   setLoading(false);
        // }, 50);
    }

    // if (loading) {
    //   return (
    //     <View style={styles.loadingContainer}>
    //       <ActivityIndicator size="large" color="#E13726" />
    //     </View>
    //   );
    // }

    const icon = {
      home: {
        active: require("../../../assets/images/icon/home-icon-fill.png"),
        inactive: require("../../../assets/images/icon/home-icon.png"),
      },
      riwayat: {
        active: require("../../../assets/images/icon/history-icon-fill.png"),
        inactive: require("../../../assets/images/icon/history-icon.png"),
      },
      pesan: {
        active: require("../../../assets/images/icon/notif-icon-fill.png"),
        inactive: require("../../../assets/images/icon/notif-icon.png"),
      },
      pengaturan: {
        active: require("../../../assets/images/icon/setting-icon-fill.png"),
        inactive: require("../../../assets/images/icon/setting-icon.png"),
      },
    }
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            handleRoute("/");
          }}
        >
          <Image source={pathName === '/' ? icon.home.active : icon.home.inactive} style={styles.icon} />
          <Text
            style={[
              styles.label,
              pathName === '/' && styles.activeLabel,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          handleRoute("/about");
        }}
      >
        <Image source={pathName === '/about' ? icon.riwayat.active : icon.riwayat.inactive} style={styles.icon} />
        <Text
          style={[
            styles.label,
            pathName === '/about' && styles.activeLabel,
          ]}
        >
          Riwayat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#E13726",
          width: 50,
          height: 50,
          borderRadius: 50,
        }}
      >
        <Image source={require("../../../assets/images/icon/reservation-icon.png")} style={{ width: 40, height: 40, resizeMode: "contain" }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handleRoute("/pesan")}
      >
        <Image source={pathName === '/pesan' ? icon.pesan.active : icon.pesan.inactive} style={styles.icon} />
        <Text
          style={[
            styles.label,
            pathName === '/pesan' && styles.activeLabel,
          ]}
        >
          Pesan
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handleRoute("/pengaturan")}
      >
        <Image source={pathName === '/pengaturan' ? icon.pengaturan.active : icon.pengaturan.inactive} style={styles.icon} />
        <Text
          style={[
            styles.label,
            pathName === '/pengaturan' && styles.activeLabel,
          ]}
        >
          Pengaturan
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar;

const styles = StyleSheet.create({
    navbar: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 90,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        width: "100%",
        borderRadius: 25,
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
        padding: 10,
        paddingBottom: 20,
    },
    navItem: {
      alignItems: "center",
      gap: 5,
    },
    label: {
      fontSize: 12,
      color: "#888",
    },
    activeLabel: {
      color: "#000000ff",
      fontWeight: "bold",
    },
    icon: {
      width: 25,
      height: 25,
      resizeMode: "contain",
    },
    loadingContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    },

})