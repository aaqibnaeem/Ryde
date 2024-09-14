import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignin = async () => {
    console.log("Handle google signin");
  };
  return (
    <View>
      <View className="flex flex-row justify-center items-center">
        <View className="flex-1 h-[1px] bg-neutral-100 mx-5" />
        <Text className="text-lg text-neutral-500">Or</Text>
        <View className="flex-1 h-[1px] bg-neutral-100 mx-5" />
      </View>
      <CustomButton
        onPress={handleGoogleSignin}
        className="w-11/12 mt-2 mx-auto shadow-none"
        bgVariant="outline"
        textVariant="primary"
        title={"Login with Google"}
        IconLeft={() => {
          return <Image source={icons.google} className="w-5 h-5 mx-2 mt-1" />;
        }}
      />
    </View>
  );
};

export default OAuth;
