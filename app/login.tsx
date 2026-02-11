import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function login() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);


    const handleLogin = () => {
        console.log("Phone:", phone);
        console.log("Password:", password);
    };

    const handleGoogleLogin = () => {
        console.log("Login with Google");
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
                <View style={styles.prefix}>
                    <Ionicons name="lock-closed" size={18} />
                </View>

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

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotText}>Lupa Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerWrapper}>
                <View style={styles.line} />
                <Text style={styles.dividerText}>Atau Login Dengan</Text>
                <View style={styles.line} />
            </View>

            <TouchableOpacity
                style={styles.googleBtn}
                onPress={handleGoogleLogin}
                >
                <Text style={styles.googleText}>Google</Text>
            </TouchableOpacity>

            {/* Footer */}
            <View style={styles.footer}>
                <Text>
                    Belum punya akun?{" "}
                    <Text
                    style={styles.signup}
                    onPress={() => router.push("/signup")}
                    >
                    Sign Up
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
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
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
})