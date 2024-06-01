import { View, Text } from "react-native";
import React from "react";

const AuthLayout = () => {
  return (
    <View className="flex-1 justify-center items-center bg-black-100">
      <Text className="text-2xl font-pblack text-white">
        Under Development 👷‍♂️⚒️ {"\n"}
        {"\n"}
      </Text>

      <Text className="text-2xl font-pblack text-white">
        What you Looking at 👀 😂
      </Text>
      <Text className="text-slate-400 absolute bottom-3">
        Made with ❤️ by Aditya 🔥
      </Text>
    </View>
  );
};

export default AuthLayout;
