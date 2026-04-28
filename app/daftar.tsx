import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function DaftarScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>Bergabung dengan</Text>
            <Text style={styles.brandName}>VibePulse.</Text>
            <Text style={styles.description}>
              Mulailah perjalanan kurasi digital Anda dengan estetika yang tak
              tertandingi.
            </Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.label}>NAMA LENGKAP</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Masukkan nama Anda"
                placeholderTextColor="#CBD5E0"
              />
              <Feather name="user" size={18} color="#CBD5E0" />
            </View>

            <Text style={styles.label}>EMAIL</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="contoh@surel.com"
                placeholderTextColor="#CBD5E0"
                keyboardType="email-address"
              />
              <Feather name="at-sign" size={18} color="#CBD5E0" />
            </View>

            <Text style={styles.label}>KATA SANDI</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="........"
                placeholderTextColor="#CBD5E0"
                secureTextEntry
              />
              <Feather name="lock" size={18} color="#CBD5E0" />
            </View>

            <Text style={styles.label}>KONFIRMASI KATA SANDI</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="........"
                placeholderTextColor="#CBD5E0"
                secureTextEntry
              />
              <Feather name="shield" size={18} color="#CBD5E0" />
            </View>

            <Text style={styles.policyText}>
              Dengan mendaftar, Anda menyetujui{" "}
              <Text style={styles.linkText}>Ketentuan Layanan</Text> dan{" "}
              <Text style={styles.linkText}>Kebijakan Privasi</Text> kami.
            </Text>

            <TouchableOpacity
              style={styles.registerButton}
              activeOpacity={0.8}
              onPress={() => router.push("/")}
            >
              <Text style={styles.registerButtonText}>Daftar Sekarang →</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Sudah memiliki akun? </Text>
              <TouchableOpacity onPress={() => router.push("/")}>
                <Text style={styles.loginLink}>Masuk</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFE",
  },
  scrollContainer: {
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  headerContainer: {
    marginBottom: 40,
    marginTop: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#1A202C",
    lineHeight: 45,
  },
  brandName: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#5E63F1",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: "#718096",
    lineHeight: 24,
    width: "90%",
  },
  formContainer: {
    width: "100%",
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
    color: "#718096",
    marginBottom: 8,
    marginTop: 20,
    letterSpacing: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F4F9",
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 60,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#2D3748",
  },
  policyText: {
    fontSize: 13,
    color: "#718096",
    marginTop: 25,
    lineHeight: 20,
    textAlign: "left",
  },
  linkText: {
    color: "#5E63F1",
    fontWeight: "600",
  },
  registerButton: {
    backgroundColor: "#5E63F1",
    borderRadius: 30,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    elevation: 8,
    shadowColor: "#5E63F1",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  registerButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  footerText: {
    color: "#718096",
    fontSize: 15,
  },
  loginLink: {
    color: "#5E63F1",
    fontSize: 15,
    fontWeight: "bold",
  },
});
