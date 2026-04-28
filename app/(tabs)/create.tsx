import { IconSymbol } from "@/components/ui/icon-symbol";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreatePost() {
  const router = useRouter();

  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [vibe, setVibe] = useState("Senang");
  const [kategori, setKategori] = useState("");
  const [location, setLocation] = useState("");

  const API_URL = "http://10.0.2.2:8000/api/posts";

  const pickImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!res.canceled) {
      setImage(res.assets[0].uri);
    }
  };

  const handlePost = async () => {
    if (!caption || !image || !kategori || !vibe) {
      alert("Semua field wajib diisi!");
      return;
    }

    try {
      console.log("POST KE:", API_URL);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          photo_video: image,
          caption,
          tagline: vibe,
          tag_kategori: kategori,
          tag_location: location,
        }),
      });

      const data = await res.json();

      console.log("RESPONSE:", data);

      if (!res.ok) {
        alert("Gagal post!");
        return;
      }

      alert("Berhasil!");
      router.back();
    } catch (err) {
      console.error("POST ERROR:", err);
    }
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <IconSymbol name="arrow.left" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>Create Post</Text>

        <TouchableOpacity onPress={handlePost}>
          <Text style={styles.postBtn}>Post</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <TextInput
          placeholder="Apa yang kamu pikirkan?"
          value={caption}
          onChangeText={setCaption}
          style={styles.input}
          multiline
        />

        <TouchableOpacity style={styles.imageBox} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={{ flex: 1 }} />
          ) : (
            <Text>Add Image</Text>
          )}
        </TouchableOpacity>

        <TextInput
          placeholder="Atau URL image..."
          value={image.startsWith("http") ? image : ""}
          onChangeText={setImage}
          style={styles.input}
        />

        <TextInput
          placeholder="Kategori (#travel)"
          value={kategori}
          onChangeText={setKategori}
          style={styles.input}
        />

        <TextInput
          placeholder="Lokasi"
          value={location}
          onChangeText={setLocation}
          style={styles.input}
        />

        <View style={styles.vibeRow}>
          {["Senang", "Sedih", "Marah", "Biasa", "Kecewa"].map((v) => (
            <TouchableOpacity
              key={v}
              onPress={() => setVibe(v)}
              style={[styles.vibeBtn, vibe === v && styles.vibeActive]}
            >
              <Text>{v}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FE" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 50,
  },

  title: { fontWeight: "bold", fontSize: 16 },

  postBtn: { color: "#5E63F1", fontWeight: "bold" },

  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },

  imageBox: {
    height: 200,
    backgroundColor: "#eee",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  vibeRow: {
    flexDirection: "row",
    marginTop: 15,
    flexWrap: "wrap",
  },

  vibeBtn: {
    padding: 10,
    backgroundColor: "#eee",
    marginRight: 5,
    marginTop: 5,
    borderRadius: 10,
  },

  vibeActive: {
    backgroundColor: "#FFD6B3",
  },
});
