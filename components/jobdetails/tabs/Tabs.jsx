import React from "react";
import { Text, View } from "react-native";

import styles from "./tabs.style";

function TabButton() {
  return (
    <View>
      <Text>TabButton</Text>
    </View>
  );
}

const Tabs = () => {
  return (
    <View style={styles.container}>
      <Text>Tabs</Text>
    </View>
  );
};

export default Tabs;
