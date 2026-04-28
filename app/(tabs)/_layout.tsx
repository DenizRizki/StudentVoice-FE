// File: app/(tabs)/_layout.tsx

import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#5E63F1",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          height: 65,
          borderRadius: 35,
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          paddingBottom: Platform.OS === "ios" ? 0 : 0,
        },
      }}
    >
      {/* TAB HOME - Mengarah ke file home.tsx */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />

      {/* TAB EXPLORE (DISCOVER) - Mengarah ke file explore.tsx */}
      <Tabs.Screen
        name="explore"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      {/* TAB SEARCH - Kosongkan dulu (pakai placeholder/layar kosong) */}
      <Tabs.Screen
        name="search_placeholder"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={26}
              color={color}
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            // Mencegah navigasi karena file search.tsx belum ada
            e.preventDefault();
            alert("Fitur Search akan segera hadir!");
          },
        }}
      />

      {/* TAB PROFILE - Mengarah ke file daftar.tsx (karena di folder kamu adanya daftar.tsx) */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      {/* SEMBUNYIKAN FILE LAIN DARI NAV BAR */}
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="create" options={{ href: null }} />
    </Tabs>
  );
}
