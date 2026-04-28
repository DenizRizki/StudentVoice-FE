// File: app/index.tsx

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [secureText, setSecureText] = useState(true);

  // Kita masukkan seluruh UI ke dalam fungsi render agar bersih
  const renderLoginUI = () => (
    <View style={styles.scrollContainer}>
      {/* HEADER SECTION */}
      <View style={styles.headerContainer}>
        <View style={styles.logoCircle}>
          <MaterialCommunityIcons name="heart-pulse" size={55} color="white" />
        </View>
        <Text style={styles.title}>Student Voice</Text>
        <Text style={styles.subtitle}>Digital Curator Experience</Text>
      </View>

      {/* FORM SECTION */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Surel</Text>
        <View style={styles.inputContainer}>
          <Feather name="mail" size={20} color="#9BA4B5" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="nama@email.com"
            placeholderTextColor="#9BA4B5"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.label}>Kata Sandi</Text>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="#9BA4B5" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="........"
            placeholderTextColor="#9BA4B5"
            secureTextEntry={secureText}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Feather
              name={secureText ? "eye-off" : "eye"}
              size={20}
              color="#9BA4B5"
            />
          </TouchableOpacity>
        </View>

        {/* BUTTON MASUK */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.replace("/home")}
        >
          <Text style={styles.loginButtonText}>Masuk</Text>
        </TouchableOpacity>

        {/* FOOTER SECTION */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Belum punya akun?</Text>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => router.push("/daftar")}
          >
            <Text style={styles.registerButtonText}>Daftar Sekarang →</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* VERSION INFO */}
      <View style={styles.versionContainer}>
        <View style={styles.line} />
        <Text style={styles.version}>V 1.0.0</Text>
        <View style={styles.line} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <FlatList
          data={[{ id: "login-form" }]}
          keyExtractor={(item) => item.id}
          renderItem={renderLoginUI}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FD" },
  scrollContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  headerContainer: { alignItems: "center", marginBottom: 50 },
  logoCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#5E63F1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    elevation: 15,
    shadowColor: "#5E63F1",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#3F42C1",
    letterSpacing: -0.5,
  },
  subtitle: { fontSize: 16, color: "#718096", marginTop: 4, fontWeight: "500" },
  formContainer: { width: "100%" },
  label: {
    fontSize: 15,
    fontWeight: "700",
    color: "#4A5568",
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F4F9",
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 60,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  icon: { marginRight: 12 },
  input: { flex: 1, fontSize: 16, color: "#2D3748" },
  loginButton: {
    backgroundColor: "#5E63F1",
    borderRadius: 30,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    elevation: 8,
    shadowColor: "#5E63F1",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  loginButtonText: { color: "white", fontSize: 20, fontWeight: "bold" },
  footer: { alignItems: "center", marginTop: 40 },
  footerText: { color: "#718096", marginBottom: 12, fontSize: 15 },
  registerButton: {
    backgroundColor: "#EDF2F7",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 30,
  },
  registerButtonText: { color: "#3F42C1", fontWeight: "700", fontSize: 15 },
  versionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    width: "100%",
    justifyContent: "center",
  },
  line: {
    height: 1,
    backgroundColor: "#E2E8F0",
    flex: 0.2,
    marginHorizontal: 15,
  },
  version: {
    fontSize: 11,
    color: "#A0AEC0",
    letterSpacing: 2,
    fontWeight: "600",
  },
});
