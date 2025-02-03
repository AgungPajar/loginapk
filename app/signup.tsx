import { View, Image, Alert } from "react-native";
import React, { useState } from "react";
import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

const SignUp = () => {
  const router = useRouter();

  // State untuk menyimpan nilai input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fungsi untuk menangani registrasi
  const onRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    // Simulasi validasi registrasi (Anda bisa mengganti ini dengan API call)
    Alert.alert("Success", "Registration successful!");
    router.navigate("/login"); // Navigasi ke halaman login
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
          placeholder="Enter Your Name"
          value={name}
          onChangeText={setName}
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
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
        <TextInput
          placeholder="Re Enter Your Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry // Menyembunyikan input password
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <MyButton title={"Register"} onPress={onRegister} />
      </View>
    </View>
  );
};

export default SignUp;