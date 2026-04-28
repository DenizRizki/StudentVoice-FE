import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState("Postingan");

  // Data Dummy untuk Grid Postingan
  const userPosts = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1488161628813-04466f872be2",
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER LOGO */}
      <View style={styles.headerNav}>
        <Ionicons name="menu-outline" size={28} color="#5E63F1" />
        <Text style={styles.logoText}>VibePulse</Text>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?u=elena" }}
          style={styles.avatarMini}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* PROFILE INFO */}
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?u=elena" }}
            style={styles.mainAvatar}
          />
          <Text style={styles.userName}>Elena Vibe</Text>
          <Text style={styles.userHandle}>@elenavibe_</Text>

          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editBtnText}>Edit Profil</Text>
          </TouchableOpacity>

          <Text style={styles.bioText}>
            Digital Curator & Visual Storyteller. Exploring the intersection of
            fashion, tech, and editorial design. Living for the aesthetic
            moments. ✨
          </Text>
        </View>

        {/* STATS SECTION */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>128</Text>
            <Text style={styles.statLabel}>POSTINGAN</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>14.2k</Text>
            <Text style={styles.statLabel}>FOLLOWERS</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>842</Text>
            <Text style={styles.statLabel}>FOLLOWING</Text>
          </View>
        </View>

        {/* TAB NAVIGATION */}
        <View style={styles.tabsContainer}>
          {["Postingan", "Media", "Suka"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tabItem,
                activeTab === tab && styles.activeTabBorder,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* MASONRY-LIKE GRID POSTS */}
        <View style={styles.gridContainer}>
          {userPosts.map((post, index) => (
            <Image
              key={post.id}
              source={{ uri: post.image }}
              style={[
                styles.gridImage,
                // Logika sederhana untuk membuat variasi ukuran seperti di gambar
                {
                  height: index === 0 ? 250 : 180,
                  width: index === 0 ? width - 40 : (width - 50) / 2,
                },
              ]}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FD" },
  headerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  logoText: { fontSize: 20, fontWeight: "bold", color: "#5E63F1" },
  avatarMini: { width: 35, height: 35, borderRadius: 17.5 },
  profileHeader: { alignItems: "center", paddingHorizontal: 40, marginTop: 10 },
  mainAvatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  userName: { fontSize: 22, fontWeight: "bold", color: "#1A202C" },
  userHandle: { fontSize: 14, color: "#718096", marginBottom: 15 },
  editBtn: {
    backgroundColor: "#5D6778",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginBottom: 20,
  },
  editBtnText: { color: "white", fontWeight: "600", fontSize: 14 },
  bioText: {
    textAlign: "center",
    color: "#4A5568",
    lineHeight: 20,
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  statBox: { alignItems: "center" },
  statNumber: { fontSize: 18, fontWeight: "bold", color: "#1A202C" },
  statLabel: {
    fontSize: 10,
    color: "#A0AEC0",
    marginTop: 4,
    fontWeight: "600",
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EDF2F7",
    marginBottom: 15,
  },
  tabItem: { flex: 1, alignItems: "center", paddingVertical: 12 },
  activeTabBorder: { borderBottomWidth: 3, borderBottomColor: "#5E63F1" },
  tabText: { fontSize: 14, fontWeight: "600", color: "#A0AEC0" },
  activeTabText: { color: "#5E63F1" },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  gridImage: {
    borderRadius: 25,
    marginBottom: 10,
    backgroundColor: "#E2E8F0",
  },
});
