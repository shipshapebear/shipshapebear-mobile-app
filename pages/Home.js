import React from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Home() {
    const insets = useSafeAreaInsets();
    return (
      <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: "#000000" }}>
        <Text style={{ fontSize: 14, color: "#ffffff" }}>Content is in safe area.</Text>
      </View>
    );
  }

export default Home