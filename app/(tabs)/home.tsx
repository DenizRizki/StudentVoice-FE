import PostCard from "@/components/PostCard";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Post {
  id: number;
  photo_video: string;
  caption: string;
  tagline: string;
  tag_kategori: string;
  tag_location?: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  // ✅ EMULATOR FIX
  const API_URL = "http://10.0.2.2:8000/api/posts";

  const fetchPosts = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();

      setPosts(json.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, []),
  );

  return (
    <View style={styles.container}>
      {/* TOP BAR */}
      <View style={styles.topBar}>
        <IconSymbol name="line.3.horizontal" size={24} color="#5E63F1" />
        <Text style={styles.logoText}>VibePulse</Text>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=11" }}
          style={styles.topAvatar}
        />
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard
            authorName="User"
            location={item.tag_location ?? "Unknown"}
            avatarUrl="https://i.pravatar.cc/150?img=33"
            postImageUrl={item.photo_video}
            caption={item.caption}
            tags={item.tag_kategori}
            vibe={item.tagline}
            vibeColor={
              item.tagline === "Senang"
                ? "#ED8936"
                : item.tagline === "Sedih"
                  ? "#4A90E2"
                  : item.tagline === "Marah"
                    ? "#E53E3E"
                    : item.tagline === "Kecewa"
                      ? "#718096"
                      : "#5E63F1"
            }
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* FAB */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/(tabs)/create")}
      >
        <IconSymbol name="pencil" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FE" },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
  },

  logoText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5E63F1",
  },

  topAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  fab: {
    position: "absolute",
    bottom: 100,
    right: 25,
    backgroundColor: "#5E63F1",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
