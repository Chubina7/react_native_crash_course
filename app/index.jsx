import { useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";

export default function Page() {
  return (
    <View>
      <View>
        <Text>Hello World</Text>
        <Text>This is the first page of your app.</Text>
      </View>
    </View>
  );
}
