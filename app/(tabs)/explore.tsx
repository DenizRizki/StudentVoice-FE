// File: app/(tabs)/explore.tsx

import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function ExploreScreen() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi ambil data berita (Contoh menggunakan NewsAPI atau Mock API)
  const fetchNews = async () => {
    try {
      // Ganti URL ini dengan API berita pilihanmu
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=YOUR_API_KEY",
      );
      const json = await response.json();
      setNews(json.articles || []);
    } catch (error) {
      console.error("Gagal ambil berita:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const renderNewsItem = ({ item }: any) => (
    <TouchableOpacity style={styles.newsCard}>
      <View style={styles.newsTextContainer}>
        <Text style={styles.newsCategory}>
          {item.source.name.toUpperCase()} •{" "}
          {new Date(item.publishedAt).toLocaleDateString()}
        </Text>
        <Text style={styles.newsTitle} numberOfLines={3}>
          {item.title}
        </Text>
      </View>
      <Image
        source={{ uri: item.urlToImage || "https://via.placeholder.com/150" }}
        style={styles.newsImage}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={28} color="#5E63F1" />
        <Text style={styles.logoText}>VibePulse</Text>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=33" }}
          style={styles.profileSmall}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={styles.contentPadding}>
          <Text style={styles.mainTitle}>Jelajahi Berita</Text>

          {/* SEARCH BAR */}
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={20} color="#A0AEC0" />
            <TextInput
              placeholder="Cari topik, berita, atau tren..."
              style={styles.searchInput}
            />
          </View>

          {/* TRENDING SECTION (Contoh Statis sesuai Gambar) */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              <Ionicons name="trending-up" size={18} color="#E53E3E" /> Trending
            </Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.trendingCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
              }}
              style={styles.trendingImage}
            />
            <View style={styles.trendingOverlay}>
              <View style={styles.tagTeknologi}>
                <Text style={styles.tagText}>TEKNOLOGI</Text>
              </View>
              <Text style={styles.trendingTitle}>
                Masa Depan Gaming: Integrasi AI di Dunia Terbuka
              </Text>
              <Text style={styles.trendingTime}>
                <Ionicons name="time-outline" size={12} /> 2 jam yang lalu
              </Text>
            </View>
          </TouchableOpacity>

          {/* BERITA TERBARU SECTION */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Berita Terbaru</Text>
            <Ionicons name="options-outline" size={20} color="#4A5568" />
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#5E63F1" />
          ) : (
            news.map((item, index) => (
              <React.Fragment key={index}>
                {renderNewsItem({ item })}
              </React.Fragment>
            ))
          )}

          <TouchableOpacity style={styles.loadMoreBtn}>
            <Text style={styles.loadMoreText}>Muat Berita Lainnya</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FD" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  logoText: { fontSize: 20, fontWeight: "bold", color: "#5E63F1" },
  profileSmall: { width: 35, height: 35, borderRadius: 17.5 },
  contentPadding: { paddingHorizontal: 20 },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A202C",
    marginVertical: 15,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#EDF2F7",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 25,
  },
  searchInput: { marginLeft: 10, flex: 1, color: "#4A5568" },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#2D3748" },
  linkText: { color: "#5E63F1", fontSize: 12, fontWeight: "600" },
  trendingCard: {
    height: 350,
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 30,
  },
  trendingImage: { width: "100%", height: "100%" },
  trendingOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  tagTeknologi: {
    backgroundColor: "#FEEBC8",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 10,
  },
  tagText: { fontSize: 10, fontWeight: "bold", color: "#744210" },
  trendingTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  trendingTime: { color: "#E2E8F0", fontSize: 12 },
  newsCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginBottom: 20,
    alignItems: "center",
  },
  newsTextContainer: { flex: 1, marginRight: 15 },
  newsCategory: {
    fontSize: 10,
    color: "#A0AEC0",
    fontWeight: "bold",
    marginBottom: 5,
  },
  newsTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2D3748",
    lineHeight: 22,
  },
  newsImage: { width: 80, height: 80, borderRadius: 20 },
  loadMoreBtn: {
    backgroundColor: "#E2E8F0",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  loadMoreText: { fontWeight: "bold", color: "#4A5568" },
});
