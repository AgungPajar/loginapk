import { View, Image, Alert } from "react-native";
import React, { useState } from "react";
import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

const Login = () => {
  const router = useRouter();

  // State untuk menyimpan nilai input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fungsi untuk menangani login
  const onLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Simulasi validasi login (Anda bisa mengganti ini dengan API call)
    if (email === "user@example.com" && password === "password123") {
      Alert.alert("Success", "Login successful!");
      router.navigate("/"); // Navigasi ke halaman utama
    } else {
      Alert.alert("Error", "Invalid email or password.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 400,
        }}
        resizeMode="cover"
      />
      <View style={{ padding: 20, gap: 20 }}>
        <TextInput
          placeholder="Enter Your Email"
          value={email}
          onChangeText={setEmail}
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Enter Your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry // Menyembunyikan input password
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <MyButton title={"Login"} onPress={onLogin} />
      </View>
    </View>
  );
};

export default Login;