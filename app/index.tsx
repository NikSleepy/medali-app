import { ImageBackground } from "expo-image";
import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Info from "./components/home/Info";
import Menu from "./components/home/Menu";
import ServiceSection from "./components/home/ServiceSection";
import Navbar from "./components/route/navbar";


export default function Index() {
  
  return (
    <>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header section */}
      <View style={styles.header}>
        <ImageBackground source={require("../assets/images/bg-header-home.png")} style={styles.headerImage}>
          <View style={{ width: "30%", height: "50%", alignItems: "center", justifyContent: "center"}}> 
            <Image source={require("../assets/images/company-icon.png")} style={{ width: "100%", height: "50%", resizeMode: "contain" }} /> 
          </View>
          <View style={{ width: "30%", height: "50%", alignItems: "center", justifyContent: "center"}}>
            <TouchableOpacity
              onPress={() => router.push('/login')}
              style={styles.buttonSignIn}
            >
              <Text style={{ color: '#030303ff', fontSize: 16 }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Menu section */}
      <View style={styles.menu}>
        <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", gap: 20, }}>
          <Image source={require("../assets/images/icon/menu-icon.png")} style={{ width: 20, height: 20, resizeMode: "contain" }} />
          <Text style={{ fontSize: 20, color: "#030303ff", fontWeight: "bold"}}>Menu</Text>
        </View>
        
        <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", gap: 15,  }}>
          <Menu />
        </View>
      </View>

      {/* Info section */}
      <View style={styles.info}>
        <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", gap: 20, }}>
          <Image source={require("../assets/images/icon/info-news-icon.png")} style={{ width: 20, height: 20, resizeMode: "contain" }} />
          <Text style={{ fontSize: 20, color: "#030303ff", fontWeight: "bold"}}>Info Terbaru</Text>
        </View>

        <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", gap: 15,  }}>
          <Info />
        </View>
      </View>

      <ServiceSection />
      
    </ScrollView>
      <View style={styles.navWrapper}>
        <Navbar />
      </View>
    </>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 90,
    },
    // Style Header section
    header: {
        width: "100%",
        height: 200,
    },
    headerImage: {
        width: "100%",
        height: "100%",
        paddingTop: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonSignIn: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#ffffffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
    },
    // Style Menu section
    menu: {
        gap: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },

    // Style Info section
    info: {
        gap: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    navWrapper: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    }

});
