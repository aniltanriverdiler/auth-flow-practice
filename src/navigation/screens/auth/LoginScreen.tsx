import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { COLORS } from "@/constants";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { BlurView } from "expo-blur";
import { useAuthStore } from "@/store/auth";

const LoginScreen = () => {
  const { setUser } = useAuthStore();

  return (
    <ImageBackground
      source={require("@/assets/grid-dark-bg.png")}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-[20px]">
          <View className="flex-1">
            {/* Back Button Section */}
            <TouchableOpacity className="p-2 bg-white/10 self-start rounded-full">
              <Feather name="chevron-left" size={24} color="white" />
            </TouchableOpacity>

            {/* Login Icon Section */}
            <Feather
              className="mx-auto my-10"
              name="log-in"
              size={120}
              color={COLORS.primary}
            />

            {/* Login Section */}
            <View className="flex-1 overflow-hidden rounded-[32px]">
              <BlurView className="flex-1" intensity={100} tint="dark">
                <View className="flex-1 py-10 px-[20px]">
                  {/* Sign in text */}
                  <Text className="text-white text-4xl font-bold text-center">
                    Sign in
                  </Text>

                  {/* Sign in sub text */}
                  <Text className="text-white/80 text-center mt-4 text-lg font-bold">
                    Log in to manage your apps
                  </Text>

                  {/* Email Input Section */}
                  <View className="bg-black/60 flex-row p-2 rounded-md mt-6">
                    <TextInput className="flex-1 pr-2 text-white" />
                    <TouchableOpacity className="p-2 bg-white/10 self-start rounded-md">
                      <Feather name="mail" size={24} color="white" />
                    </TouchableOpacity>
                  </View>

                  {/* Password Input Section */}
                  <View className="bg-black/60 flex-row p-2 rounded-md mt-6">
                    <TextInput className="flex-1 pr-2 text-white" />
                    <TouchableOpacity className="p-2 bg-white/10 self-start rounded-md">
                      <Feather name="eye-off" size={24} color="white" />
                    </TouchableOpacity>
                  </View>

                  {/* Login Button Section */}
                  <TouchableOpacity
                    onPress={() => {
                      setUser({ token: "anil" });
                    }}
                    className="bg-primary p-2 mt-6 rounded-md"
                  >
                    <Text className="text-black text-center p-2 text-lg font-bold">
                      Sign in
                    </Text>
                  </TouchableOpacity>

                  {/* Input Text Section */}
                  <Text
                    onPress={() => {}}
                    className="text-white/60 text-center text-base mt-8 font-bold"
                  >
                    Forgot Password?
                  </Text>

                  {/* Apple and Google Login Section */}
                  <View className="h-[1px] w-[80px] bg-white/60 self-center mt-10"></View>
                  <View className="flex-row mt-10 justify-center gap-5">
                    <TouchableOpacity className="p-4 bg-white/10 self-start rounded-md">
                      <FontAwesome6 name="google" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity className="px-5 py-4 bg-white/10 self-start rounded-md">
                      <FontAwesome6 name="apple" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </BlurView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;
