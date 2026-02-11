import { Ionicons } from '@expo/vector-icons'
import { ImageBackground } from 'expo-image'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [checked, setChecked] = useState(false);

    const handleLogin = () => {
      console.log("Phone:", phone);
      console.log("Password:", password);
      if (password !== confirmPassword) {
        alert("Password tidak cocok");
        return;
      }
      if (!checked) {
        alert("Anda harus menyetujui syarat & ketentuan");
        return;
      }
      router.push("/login");
  };

  return (
    <View style={styles.container}>
        <View style={{ width: "100%", height: 200, }}>
            <ImageBackground source={require("../assets/images/login/bg-header.png")} style={styles.headerImage}>
                <TouchableOpacity onPress={() => router.back()} style={styles.buttonBack}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </ImageBackground>
        </View>
        <View style={{ padding: 20, justifyContent: "center", alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "#030303ff" }}>Sign In</Text>
            <Text style={{ fontSize: 20, color: "#030303ff", textAlign: "center" }}>Masukan nomor telepon dan password untuk masuk ke akun anda</Text>
        </View>

        <View style={styles.form}>
            <View style={styles.inputGroup}>
                <TextInput
                style={styles.input}
                placeholder="Nama Lengkap"
                value={name}
                onChangeText={setName}
                />
            </View>

            <View style={styles.inputGroup}>
                <View style={styles.prefix}>
                <Text style={styles.prefixText}>+62</Text>
                </View>
                <TextInput
                style={styles.input}
                placeholder="Nomor Telepon"
                keyboardType="numeric"
                value={phone}
                onChangeText={setPhone}
                />
            </View>

            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholder="Masukan Email Anda"
                value={email}
                onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputGroup}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Password"
                    secureTextEntry={showPassword}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={{ padding: 10 }} onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                    size={20}
                    color="gray"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Konfirmasi Password"
                    secureTextEntry={showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <TouchableOpacity style={{ padding: 10 }} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <Ionicons
                    name={showConfirmPassword ? "eye-off" : "eye"}
                    size={20}
                    color="gray"
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.ContainerCheckedBox}
              onPress={() => setChecked(!checked)}
            >
              <View style={[styles.box, checked && styles.checkedBox]}>
                {checked && <Ionicons name="checkmark" size={18} color="white" />}
              </View>
              <Text style={styles.label}>Dengan mendaftar, anda telah membaca dan setuju dengan <Text style={styles.syaratKetentuan}>Syarat & Ketentuan</Text> yang Berlaku</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={[styles.loginBtn, { opacity: checked ? 1 : 0.5 }]} disabled={!checked} onPress={handleLogin}>
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>

            {/* Footer */}
            <View style={styles.footer}>
                <Text>
                    Sudah punya akun?{" "}
                    <Text
                    style={styles.signup}
                    onPress={() => router.push("/login")}
                    >
                    Login
                    </Text>{" "}
                    disini.
                </Text>
            </View>
        </View>
        <View style={{ width: "100%", height: 100, position: "absolute", bottom: 0 }}>
            <ImageBackground source={require("../assets/images/login/bg-footer.png")} style={styles.footerImage}>
            </ImageBackground>
        </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerImage: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    footerImage: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonBack: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginTop: 40,
        marginLeft: 20,
        backgroundColor: "#ffffffff",
        alignItems: "center",
        justifyContent: "center",
    },
    inputGroup: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
    },
    form:{
        paddingHorizontal: 20,
    },
    prefix: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: "#f0f0f0",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderRightWidth: 1,
        borderRightColor: "#ccc",
    },
    prefixText: {
        fontSize: 16,
        color: "#333",
    },
    input: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: "#f0f0f0",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        fontSize: 16,
    },
    forgotPassword: {
        alignItems: "flex-end",
        paddingVertical: 15,
    },
    forgotText: {
        color: "#007bff",
        fontSize: 16,
    },
    loginBtn: {
        backgroundColor: "#e72128",
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: "center",
    },
    loginText: {
        color: "#ffffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    dividerWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#ccc",
    },
    dividerText: {
        marginHorizontal: 10,
        fontSize: 16,
        color: "#333",
    },
    googleBtn: {
        backgroundColor: "#ffffffff",
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#e72128",
    },
    googleText: {
        color: "#030303ff",
        fontSize: 16,
        fontWeight: "bold",
    },
    footer: {
        alignItems: "center",
        paddingVertical: 20,
    },
    signup: {
        color: "#e72128",
        fontSize: 16,
        fontWeight: "bold",
    },
    syaratKetentuan: {
        color: "#007bff",
        fontSize: 16,
        fontWeight: "bold",
    },
    ContainerCheckedBox: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 1,
        paddingVertical: 10,
    },
    checkedBox: {
        backgroundColor: "#E13726",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        width: 22,
        height: 22,
        borderWidth: 2,
        borderColor: "#7a7a7aff",
        borderRadius: 5,
    },
    label: {
        marginLeft: 10,
        fontSize: 14,
        color: "#333",
    },
})