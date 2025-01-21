import { Image, View } from "react-native";
import React from "react";
import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";


const SignUp = () => {
  const router = useRouter();
  const onRegister = () => {
    router.navigate("/login");
  }
  return (
    <View style={{ flex: 1, }}>
      <Image source={require("@/assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 400,
        }}
        resizeMode="cover"
      />
      <View style={{ padding: 20, gap:20, }}>
        <TextInput placeholder="Enter Your Name" style={{
          borderWidth: 1,
          height: 50,
          paddingHorizontal: 20,
          borderRadius: 10,
        }} 
        onChangeText={(e) => console.log(e)}
        /> 
        <TextInput placeholder="Enter Your Email" style={{
          borderWidth: 1,
          height: 50,
          paddingHorizontal: 20,
          borderRadius: 10,
        }} 
        onChangeText={(e) => console.log(e)}
        /> 
        <TextInput placeholder="Enter Your Password" style={{
          borderWidth: 1,
          height: 50,
          paddingHorizontal: 20,
          borderRadius: 10,
        }} 
        onChangeText={(e) => console.log(e)}
        /> 
        <TextInput placeholder="Re Enter Your Password" style={{
          borderWidth: 1,
          height: 50,
          paddingHorizontal: 20,
          borderRadius: 10,
        }} 
        onChangeText={(e) => console.log(e)}
        /> 
        <MyButton title={"Register"} onPress={onRegister} />
      </View>
    </View>
  );
};

export default SignUp;