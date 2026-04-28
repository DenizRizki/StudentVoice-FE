import { IconSymbol } from "@/components/ui/icon-symbol";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PostCardProps {
  authorName: string;
  location: string;
  avatarUrl: string;
  postImageUrl: string;
  caption: string;
  tags: string;
  vibe: string;
  vibeColor: string;
}

export default function PostCard({
  authorName,
  location,
  avatarUrl,
  postImageUrl,
  caption,
  tags,
  vibe,
  vibeColor,
}: PostCardProps) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={{
            uri: avatarUrl || "https://i.pravatar.cc/150?img=1",
          }}
          style={styles.avatar}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.authorName}>{authorName}</Text>

          <View style={styles.locationWrap}>
            <IconSymbol name="mappin.and.ellipse" size={12} color="#999" />
            <Text style={styles.locationText}>{location || "Unknown"}</Text>
          </View>
        </View>

        <View style={[styles.badge, { backgroundColor: vibeColor + "20" }]}>
          <Text style={{ color: vibeColor, fontWeight: "bold" }}>{vibe}</Text>
        </View>
      </View>

      {/* IMAGE */}
      <Image
        source={{
          uri:
            postImageUrl && postImageUrl.startsWith("http")
              ? postImageUrl
              : "https://picsum.photos/500/300",
        }}
        style={styles.postImage}
      />

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.tags}>{tags}</Text>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn}>
            <IconSymbol name="heart" size={20} color="#999" />
            <Text style={styles.actionText}>Like</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <IconSymbol name="bubble.right" size={20} color="#999" />
            <Text style={styles.actionText}>Comment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 20,
    elevation: 3,
  },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  avatar: { width: 45, height: 45, borderRadius: 22.5, marginRight: 10 },
  authorName: { fontWeight: "bold" },
  locationWrap: { flexDirection: "row", alignItems: "center" },
  locationText: { fontSize: 12, color: "#999", marginLeft: 4 },
  badge: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15 },
  postImage: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginVertical: 10,
  },
  content: { marginBottom: 10 },
  caption: { fontSize: 14 },
  tags: { color: "#5E63F1", fontWeight: "600" },
  footer: { flexDirection: "row", justifyContent: "space-between" },
  actions: { flexDirection: "row" },
  actionBtn: { flexDirection: "row", alignItems: "center", marginRight: 15 },
  actionText: { marginLeft: 5, fontSize: 12, color: "#999" },
});
